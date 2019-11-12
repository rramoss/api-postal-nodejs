# Api códigos postales México
--

Consulta usando un **Código Postal** y obten **estado, ciudad, colonia o colonias** en formato JSON

http://ramosdigital.com/postal/api


La datos fueron obtenidos de **Servicio Postal Méxicano**  https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/CodigoPostal_Exportar.aspx
actualizada al 30 Junio 2019

# Ejemplo
Ejemplo de consulta [GET]: 
http://ramosdigital.com/postal/api/03840

Ejemplo de resultado:
```sh
{
	"status": "ok",
	"data": {
		"cp": "3840",
		"colonia": ["Ampliación Nápoles"],
		"municipio": "Benito Juárez",
		"ciudad": "Ciudad de México",
		"estado": "Ciudad de México"
	}
}
```


# Licencia
MIT License

--
Hecho con 🖤 