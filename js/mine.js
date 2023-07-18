

var pNameInput = document.getElementById("pNameId");
var pPriceInput = document.getElementById("pPriceId");
var pCatInput = document.getElementById("pCatId");
var pDescInput = document.getElementById("pDescId");

var addBtn = document.getElementById("adBtn");
var updateBtn = document.getElementById("updateBtn");

var myData; 

var currentIndex;
createArray(myData);

function createArray(arr)
{
    if(localStorage.getItem("ourStorage") == null)
    {
        myData = [];
    }
    else
    {
        myData = JSON.parse(localStorage.getItem("ourStorage"));
        displayData();
    }
}


function addProduct()
{

    if(validateInputs() == false)
    {
        return;

    }
        
    else
    {
        var oneProduct = 
        {
            pName : pNameInput.value, 
            pPrice : pPriceInput.value, 
            pCat : pCatInput.value, 
            pDesc : pDescInput.value, 
        };

        


    // console.log(oneProduct);
    // call clear func

    pushInArray(myData , oneProduct);

    
    displayData();  
    clearData();

    alert("Product Added Successfully...");


    }
     
}


function pushInArray(arr , obj)
{
    arr.push(obj);
    addInLocalStorage(arr);
}

function addInLocalStorage(arr)
{
    localStorage.setItem("ourStorage" , JSON.stringify(arr))

}


function validateInputs()
{
    if(pNameInput.value == "")
    {
        alert("Please enter product name");
        return false;
    }

    if(pPriceInput.value == "")
    {
        alert("Please enter product Price");
        return false;
    }

    if(pCatInput.value == "")
    {
        alert("Please enter product Category");
        return false;
    }

    return true;

}

function displayData()
{
    var hasalah = ``;
    for(var i=0; i<myData.length; i++)
    {
        hasalah += `<tr>
        <td>${i}</td>
        <td>${myData[i].pName}</td>
        <td>${myData[i].pPrice}</td>
        <td>${myData[i].pCat}</td>
        <td>${myData[i].pDesc}</td>
        <td>
          <button onclick="setDataToInputs(${i})" class="btn btn-outline-warning">Update</button>
        </td>
        <td>
          <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>`;
    }

    document.getElementById("tBody").innerHTML = hasalah;
}
function clearData()
{
    pNameInput.value = "";
    pPriceInput.value = "";
    pCatInput.value = "";
    pDescInput.value = "";

}

function deleteProduct(pIndex)
{
    myData.splice(pIndex , 1);
    displayData();

    addInLocalStorage(myData);
}

function searchProducr(userWord)
{
    var hasala = "";

    for(var i =0; i< myData.length; i++)
    {
        if(myData[i].pName.toLowerCase().includes(userWord.toLowerCase()))
        {
            hasala += `<tr>
        <td>${i}</td>
        <td>${myData[i].pName}</td>
        <td>${myData[i].pPrice}</td>
        <td>${myData[i].pCat}</td>
        <td>${myData[i].pDesc}</td>
        <td>
          <button onclick="setDataToInputs(${i})" class="btn btn-outline-warning">Update</button>
        </td>
        <td>
          <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete</button>
        </td>
      </tr>`;
        }
    }

    document.getElementById("tBody").innerHTML = hasala;


}

function setDataToInputs(indx)
{
     pNameInput.value =  myData[indx].pName;
     pPriceInput.value =  myData[indx].pPrice;
     pCatInput.value =  myData[indx].pCat;
     pDescInput.value =  myData[indx].pDesc;

     hideAddBtn();
     showUpdateBtn();

     currentIndex = indx;

}

function hideAddBtn()
{
    addBtn.style.display = "none";
}

function showUpdateBtn()
{
    updateBtn.style.display = "block";
}

function updateArray(arr,obj)
{
    arr[currentIndex] = obj;
    addInLocalStorage(arr);
}
function updateProducts()
{
    if(validateInputs() == false)
    {
        return;

    }
        
    else
    {
        var oneProduct = 
        {
            pName : pNameInput.value, 
            pPrice : pPriceInput.value, 
            pCat : pCatInput.value, 
            pDesc : pDescInput.value, 
        };

        


    // console.log(oneProduct);
    // call clear func

    updateArray(myData , oneProduct);

    
    displayData();  
    clearData();

    alert("Product Updated Successfully...");


    }
}