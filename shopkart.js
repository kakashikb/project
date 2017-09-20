var kart = [];
$(document).ready(function(){
	
	outputKart();

	$(".click").click(function(e){	 
		e.preventDefault();
		// console.log(e);
		var itemInfo = e.target.dataset; /*$(this.dataset)[0];*/
		var itemKart = false;
		itemInfo.qty = 1;

		$(kart).each(function(index,val){
		 	// console.log(index,val);
			if(val.id==itemInfo.id){
			 	val.qty = parseInt(val.qty) + parseInt(itemInfo.qty); //val.qty++
			 	itemKart = true;
			}
		})

		if(!itemKart){	 	
			kart.push(itemInfo);	 
		}

		sessionStorage["sKart"] = JSON.stringify(kart)
		outputKart();
		

		var outputHtml = "";
		var total =0;
		var subTotal= 0;
		$(kart).each(function(index,val){
			// console.log(val.name+" "+val.qty+" "+val.price);
			subTotal = val.qty*val.price;
			outputHtml += "<tr><td>" + val.name + "</td><td> " + val.qty + "</td><td class=text-sm-right>" + formatCurncy(val.price) + "</td><td class=text-sm-right>" + formatCurncy(subTotal) +"</td><tr>" ; 
			total += subTotal;
			// console.log(subTotal);
			console.log(total);
		})
			outputHtml += "<tr><td colspan=3 class=text-sm-right><b>TOTAL</b></td><td class=text-sm-right><b>"+formatCurncy(total)+"</b></td></tr>";
			$("#outputItem").html(outputHtml);

		function formatCurncy(n){
			return "$" + (n/1).toFixed(2);
		}





	})

		function outputKart(){
		 	if(sessionStorage["sKart"] != null){
		 		kart = JSON.parse(sessionStorage["sKart"].toString());		
			}

			console.log(sessionStorage["sKart"]);
			console.log(kart);
		}

});




