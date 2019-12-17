/* Dispay Driver Data */
function displayDriverInfo(){
    var AjaxRequest = new XMLHttpRequest();
    AjaxRequest.open("get","https://restaurantappp.herokuapp.com/api/driver",true);
    AjaxRequest.onreadystatechange = function(){
        if(this.readyState==4){
            var responseData = JSON.parse(this.responseText);
            getDataFromServer(responseData);
        }
    }
    AjaxRequest.send();
}



/* Bind Data in HTML Page */
function getDataFromServer(responseData){
        //console.log(responseData);
        let Drivertable = "<table><tr><th>ID</th><th>Name</th><th>Address</th><th>Phone</th><th><button onclick=addDriverPop(); id='addNewDriver'>Add New</button></th></tr>";
        for(let i=0; i<responseData.length; i++){
            let Driverrow = "<tr>";
            console.log(responseData.length);
            Driverrow += "<td>"+ responseData[i]._id +"</td><td>"+responseData[i].name+"</td><td>"+ responseData[i].address +"</td><td>" + responseData[i].phone + "</td><td><button onclick=\"editDriverPop('"+responseData[i]._id+"','"+responseData[i].name+"','"+responseData[i].address+"','"+responseData[i].phone+"')\">Edit</button><button onclick=deleteDriverInfo('"+responseData[i]._id+"') >Delete</button></td>";
            Driverrow +="</tr>";
            Drivertable += Driverrow;
            //console.log(Drivertable);
        }
        Drivertable +="</table>";
        document.getElementById("DriverApp").innerHTML=Drivertable;
}

/* Delete Data from Front End and server */
function deleteDriverInfo(deleteID){
    var deleteRequest = new XMLHttpRequest();
    deleteRequest.open("delete","https://restaurantappp.herokuapp.com/api/driver/"+deleteID, true);
    deleteRequest.onreadystatechange = function(){
        if(this.readyState==4){
            //alert("Request Processed");
            var responseStatus = JSON.parse(this.responseText);
            if(responseStatus.status==true){
                 displayDriverInfo();
            }else{
                alert("Response Failed");
            }
        }
    }
    deleteRequest.send();
}



displayDriverInfo();