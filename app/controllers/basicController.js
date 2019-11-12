'use strict'

//load object
const basicController={}

basicController.get = (req, res) => {
  res.status(200).send({ status: "error", data: "", message: "Especifica Código Postal para continuar por ejemplo '/03840' " })
};



basicController.getpostal = (req, res) => {

        let query = "SELECT cp,colonia,municipio,ciudad, estado FROM location_postal.location_postal where cp="+req.params.postal+" and tipos_asentamiento!='Pueblo'"
        var status = false
        var resp = []
        var colonia = []
        let query_insert = "Insert into location_postal.records (host, cp, url) values ('"+req.ip+"', '"+req.params.postal+"', '/postal'  )"

        db.query(query, (error, result)=>{
          if(error){
            //console.log("db error")
            //resp = false;
            res.status(200).send({ status: "error", data: "", message: "No se encontraron coincidencias de Código Postal" })      
          } 
          
          
          if(result) {
            //console.log("db -> ok")
              if(result.length){ 
                for(let i=0; i< result.length; i++){
                  colonia.push(result[i].colonia)

                }

                resp = {"cp" : result[0].cp, "colonia" : colonia, "municipio": result[0].municipio, "ciudad": result[0].ciudad, "estado": result[0].estado}

            //console.log(resp)
            res.status(200).send({status: "ok", data: resp })
                
              }else{ res.status(200).send({ status: "error", data: "", message: "No se encontraron coincidencias de Código Postal" });     }
          }

        })

        db.query(query_insert, (error, result)=>{
          if(error){
            //console.log("ok")
          }
          if(result){
            //console.log("error")
          }

        })
      
  };



module.exports = basicController
