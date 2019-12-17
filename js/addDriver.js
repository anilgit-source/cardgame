//console.log("add Driver Page");
/* Add New Data into server and Front End */
function addDriverPop(){
    document.getElementById("myModal").style.display="block"
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        document.getElementById("myModal").style.display="none"
    }
    document.getElementById("driver_name").value = '';
    document.getElementById("driver_phone").value = '';
    document.getElementById("driver_address").value = '';
    document.getElementById("modalTitle").innerHTML = 'Add New Driver';
    document.getElementById("modalAction").innerHTML = 'Add Driver';
    document.getElementById("modalAction").onclick = function(){
        addNewDriver();
        document.getElementById("myModal").style.display="none"
    }
}

function editDriverPop(id, name, address, phone){
    console.log(id, name, address, phone);
    document.getElementById("myModal").style.display="block";
    var closeBtn = document.getElementsByClassName("close")[0];
    closeBtn.onclick = function() {
        document.getElementById("myModal").style.display="none"
    }
    //set edit features
    document.getElementById("driver_id").value = id;
    document.getElementById("driver_name").value = name;
    document.getElementById("driver_address").value = address;
    document.getElementById("driver_phone").value = phone;
    document.getElementById("modalTitle").innerHTML = 'Edit Driver';
    document.getElementById("modalAction").innerHTML = 'Update';
    document.getElementById("modalAction").onclick = function(){
    var editObj = new Object();
    editObj.name=document.getElementById("driver_name").value;
    editObj.address=document.getElementById("driver_address").value;
    editObj.phone=document.getElementById("driver_phone").value
    
    editDriverInfor(id,editObj);
        //editDriverInfor();
        document.getElementById("myModal").style.display="none"
    }
}
 
 
function addNewDriver (){
    var Dname = document.getElementById("driver_name").value;
    var Dphone = document.getElementById("driver_phone").value;
    var Daddress = document.getElementById("driver_address").value;
 
    var driverObj = new Object(); 
    driverObj.name = Dname;
    driverObj.phone = Dphone;
    driverObj.address = Daddress;
    document.getElementById("myModal").style.display="none"
    //console.log(driverObj);
    sendDriverInfor(driverObj);
} 


function sendDriverInfor (driverObj) {
    //console.log(driverObj);
    var converToStrng = JSON.stringify(driverObj);
    var request = new XMLHttpRequest();
    request.onreadystatechange  = function(){   
        if(this.readyState==4){
                var serverResponse = JSON.parse(this.responseText);
                if(serverResponse.status==true){
                    displayDriverInfo();
                }
        }
            
    }
    request.open("post","https://restaurantappp.herokuapp.com/api/driver", true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(converToStrng); 
}


function editDriverInfor(id,editObj){
    console.log(editObj);
    var converToStrng = JSON.stringify(editObj);
    var request = new XMLHttpRequest();
    request.onreadystatechange  = function(){   
        if(this.readyState==4){
                var serverResponse = JSON.parse(this.responseText);
                if(serverResponse.status==true){
                    displayDriverInfo();
                }
        }
            
    }
    request.open("put","https://restaurantappp.herokuapp.com/api/driver/"+id, true);
    request.setRequestHeader("Content-type", "application/json");
    request.send(converToStrng); 

}
         
 
    
 
    
