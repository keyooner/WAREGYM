<script type="text/javascript">
    function showTrainings(){
    switch ({{training}}){
    case "Principiante":
    	document.getElementById("hprinc").style.display='block';
    	break;
    case "Medio":
    	document.getElementById("hmed").style.display='block';
    	break;
    case "Avanzado":
    	document.getElementById("hadv").style.display='block';
    	break;
    case "Experto":
    	document.getElementById("hexp").style.display='block';
    	break;
    }
    }
    window.onload=showTrainings();
    </script>