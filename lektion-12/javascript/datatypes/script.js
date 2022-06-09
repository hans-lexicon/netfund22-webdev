/*
        DATATYPER

        JS                          C#                                  SQL                                                 är till för:
        -----------------------------------------------------------------------------------------------------------------------------------------------------------------
        String                      string                              char, nchar, varchar, nvarchar                      text
        Number                      int,long,double,decimal,float       bit,smallint,int,bigint,money,decimal,float         tal
        Boolean                     bool                                bool                                                sant/falskt, true/false, 0/1
        Object                      object, null                        ---                                                 objekt ex. en användare, en bil, en produkt
        null (object)               null                                null                                                när det inte finns någon datatyp
        Undefined                   ---                                 ---                                                 odefinerbart dvs det är inget än typ som null
*/

// deklarering
// firstName = "Hans"
// var lastName = "Mattin-Lassei"
// let middleName = "Bengt"                     // <- så här ska du göra
// const pi = 3.14


// STRING - Till för texter
let firstName = "Hans"
let lastName = 'Mattin-Lassei'
let address = `Nordkapsvägen 1`     // shift + ´

var sentence = "Hej jag heter " + firstName + " " + lastName + " och jag är en \"bäst\"."
var json = "{ \"firstName\": \"Hans\", \"lastName\": \"Mattin-Lassei\" }"

var sentence = 'Hej jag heter ' + firstName + ' ' + lastName + ' och jag är en "bäst".'
var json = '{ "firstName": "Hans", "lastName": "Mattin-Lassei" }'

var sentence = `Hej jag heter ${firstName} ${lastName} och jag är en "bäst".`
var json = `{ "firstName": "${firstName}", "lastName": "${lastName}" }`

console.log(sentence)
console.log(json)


// Number - till för tal
var value = 1
var value = 1.1
console.log(value)

