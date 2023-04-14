//
document . addEventListener ( 'DOMContentLoaded' , function ( ) {
    var app = new App ( ) ;
    app . init ( ) ;
    } ) ;

//  Path: app.js

function App ( ) {
    this . init = function ( ) {
        this . bindEvents ( ) ;
        } ;
    this . bindEvents = function ( ) {
        document . getElementById ( 'btn' ) . addEventListener ( 'click' , this . clickHandler ) ;
        } ;
    this . clickHandler = function ( e ) {
        console . log ( 'Click!' ) ;
        } ;
}

