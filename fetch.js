var axios = require('axios')
var lodash = require('lodash')

var link = "https://services5.arcgis.com/VS6HdKS0VfIhv8Ct/arcgis/rest/services/COVID19_Indonesia_per_Provinsi/FeatureServer/0/query?f=json&where=Provinsi%20%3C%3E%20%27Indonesia%27&returnGeometry=false&geometryType=esriGeometryEnvelope&inSR=102100&outFields=*&orderByFields=kode_provi%20DESC&outSR=102100&resultType=tile"


axios.get(link).then((response) => {
    var data = response.data.features;
    var banten = lodash.filter(data, data => data.attributes['Provinsi'] == "Banten")
    var jabar = lodash.filter(data, data => data.attributes['Provinsi'] == "Jawa Barat")
    var dki = lodash.filter(data, data => data.attributes['Provinsi'] == "DKI Jakarta")
    var jateng = lodash.filter(data, data => data.attributes['Provinsi'] == "Jawa Tengah")
    var jatim = lodash.filter(data, data => data.attributes['Provinsi'] == "Jawa Timur")
    var diy = lodash.filter(data, data => data.attributes['Provinsi'] == "Daerah Istimewa Yogyakarta")
    var bali = lodash.filter(data, data => data.attributes['Provinsi'] == "Bali")

    console.log(banten[0].attributes['Provinsi'])
})
return 0;