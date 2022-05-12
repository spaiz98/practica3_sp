    function corriente(a,b){
        const resultado = parseFloat (a) / parseFloat (b)
        return resultado
    }
    
    function recolectar(){
        const val1 = document.getElementById("inp_1").value
        const val2 = document.getElementById("inp_2").value
    
        const respuesta = corriente(val1,val2)
        document.getElementById("h_resultado").textContent = respuesta.toFixed(2)
    
    }
    
    //-------------------------------------------------------------------
    
    function tension(b,c){
            const resultado2 = parseFloat (b) * parseFloat (c)
            return resultado2
        }
        
        function recolectar2(){
            const val3 = document.getElementById("inp_3").value
            const val4 = document.getElementById("inp_4").value
        
            const respuesta2 = tension(val3,val4)
            document.getElementById("h2_resultado").textContent = respuesta2.toFixed(2)
        
        }
    
//--------------------------------------------------------------------------

    function resistencia(c,d){
            const resultado3 = parseFloat (c) / parseFloat (d)
            return resultado3
    }

    function recolectar3(){
            const val5 = document.getElementById("inp_5").value
            const val6 = document.getElementById("inp_6").value
            const respuesta3 = resistencia(val5,val6)
            document.getElementById("h3_resultado").textContent = respuesta3.toFixed(2)

    }
    
