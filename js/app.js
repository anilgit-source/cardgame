function getDriverData(){
    var request = new XMLHttpRequest();
    request.onreadystatechange  = function(){   
		if(this.readyState==4){
			addToHTMLTable(this.responseText);
		}

	}
	request.open("get", "https://restaurantappp.herokuapp.com/api/driver", true );
    request.send();
}
    
// function addToHTML(mydata){
//     console.log(mydata.length);
//     var obj = JSON.parse(mydata);
//     var htmlString = "<ul>";
//         for(let i = 0; i<obj.length; i=i+1){
//             console.log(obj[i]);
//             let liStr = "<li>" + obj[i].name + "," + obj[i].phone + "," + obj[i].address +"</li>";
//             htmlString = htmlString + liStr;
//         }
//         htmlString = htmlString + "</ul>";
//         document.getElementById("dataId").innerHTML=htmlString;
//     }

    function addToHTMLTable(mydata){
        document.getElementById("newDriveBtn").style.display="block";
        var obj = JSON.parse(mydata);
        var htmlString = '<table align="center" width="600px;" border="1"><tr><td>Sr no </td><td>name: </td><td>phone:</td><td>address:</td><td>edit:</td><td>delete:</td></tr>';

        console.log(obj[1]);
        for(let i = 0; i<obj.length; i=i+1){
            console.log(obj[i]);
            let liStr = "<tr>"
            console.log(obj[i]._id);
            console.log(typeof(obj[i]));
             obj[i] = [obj[i]];
            for(let j=0; j<obj[i].length; j=j+1){
                
                liStr = liStr + '<td class="mybg">' + (i+1) + '</td>' + '<td>' + obj[i][j].name + '</td>' + '<td>' + obj[i][j].phone + '</td>' + '<td>' + obj[i][j].address +'</td>' + '<td><button>Edit</button></td>' + '<td><button onclick="deleteDriver(\'' + obj[i][j]._id + '\')">Delete</button></td>';
            }
            
            liStr = liStr + "</tr>"
            htmlString = htmlString + liStr;
        }
        htmlString = htmlString + "</table>";

        console.log(htmlString);
    document.getElementById("dataId").innerHTML=htmlString;
    }



    function newDriver(){
        document.getElementById("pop-div").style.display="block";
    }

    function hideOverlay(){
        document.getElementById("pop-div").style.display="none";
    }

 getDriverData();
 function  deleteDriver(id){
    var deleteRequest = new XMLHttpRequest()
    deleteRequest.onreadystatechange  = function(){   
		
		if(this.readyState==4){
			//addToHTMLTable(this.responseText);
            var response  = JSON.parse(this.responseText);
            if(response.status==true){
                getDriverData();

            }
        }
            
       

	}

    deleteRequest.open("delete", "https://restaurantappp.herokuapp.com/api/driver/"+id, true );   

    deleteRequest.send();

    } 
    