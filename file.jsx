//Iniciando el uso de React

{
  const navBar = <nav>I am a nav bar</nav>;

const myTeam = {
    center: <li>Benzo Walli</li>,
    powerForward: <li>Rasha Loa</li>,
    smallForward: <li>Tayshaun Dasmoto</li>,
    shootingGuard: <li>Colmar Cumberbatch</li>,
    pointGuard: <li>Femi Billon</li>
  };


var myArticle = <article> hola </article>;

<a href="https://www.example.com"><h1>Click me!</h1></a>
}

//Declaracion multilinea

{
  (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  )

  const theExample = (
    <a href="https://www.example.com">
      <h1>
        Click me!
      </h1>
    </a>
  );

}

//Declaracion de atributo clase en jsx: Se utiliza className  en lugar de class
{   
  const myDiv = <div className="big"> </div>

// Renderizar un elemento"
    const myDiv = <div className="big">I AM A BIG DIV</div>;
    ReactDOM.render(myDiv, document.getElementById("app"));
}
/*
When you write a self-closing tag in HTML, it is optional to include a forward-slash immediately before the final angle-bracket:
Fine in HTML with a slash:
  <br />
Also fine, without the slash:
  <br>

But!
In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:
Fine in JSX:
 
  <br />

NOT FINE AT ALL in JSX:
  <br></br>
*/

// Renderizar argumentos ( en este caso pareceria pero no se suman los valores)
{
  ReactDOM.render(<h1>2 + 3</h1>,
    document.getElementById('app')
  );

// Renderizar argumentos que se operan , aqui si se suman los argumentos
ReactDOM.render(<h1>{2 + 3}</h1>,
    document.getElementById('app')
  );
//

{Math.PI.toFixed(20)} //ver los 20 primeros digitos de  PI 
}

//Renderizar variables 
{
  import React from 'react';
import ReactDOM from 'react-dom';

    const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';
    // Declare new variable here:
    var gooseImg = ( 
        <img
            src={goose}  /> );

    ReactDOM.render(gooseImg, document.getElementById('app'));
}

// Imagenes de pandas
{
  const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 
}
    
// Listado de event listeners validos en React
https://reactjs.org/docs/events.html#supported-events


//Uso de event listener para cambiar  una imagen por otra haciend click sobre ella
{
    import React from 'react';
    import ReactDOM from 'react-dom';

    function makeDoggy(e) {
      // Call this extremely useful function on an <img>.
      // The <img> will become a picture of a doggy.
      e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
      e.target.setAttribute('alt', 'doggy');
    }
    const kitty = (
      <img onClick={makeDoggy}
        src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
        alt="kitty" />
    );
    
    ReactDOM.render(kitty, document.getElementById('app'));
    }

//Como utilizar if con React 
{
    import React from 'react';
    import ReactDOM from 'react-dom';

    let message;
    if (user.age >= drinkingAge) {
      message = (
        <h1>
          Hey, check out this alcoholic beverage!
        </h1>
      );
    } else {
      message = (
        <h1>
          Hey, check out these earrings I got at Claire's!
        </h1>
      );
    }
    ReactDOM.render(
      message, 
      document.getElementById('app')
    );
}
// segundo ejemplo de utilizacion de If en react
{
    import React from 'react';
    import ReactDOM from 'react-dom';
    
    function coinToss() {
      // This function will randomly return either 'heads' or 'tails'.
      return Math.random() < 0.5 ? 'heads' : 'tails';
    }
    
    const pics = {
      kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
      doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
    };
    let img;
    
    // if/else statement begins here:
    if (coinToss() === 'heads'){
      img = <img src={pics.kitty} />
    } else {
      img = <img src={pics.doggy} />
    }
    
    ReactDOM.render(img, document.getElementById('app'));

    
}

// Usando condicionales con el operador ternario
{
    import React from 'react';
import ReactDOM from 'react-dom';

function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img = <img src={pics[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;


ReactDOM.render(
	img, 
	document.getElementById('app')
);
}

//condicionales con el operador && 

//If the expression on the left of the && evaluates as true, then the JSX on the 
//right of the && will be rendered. If the first expression is false, however, then 
//the JSX to the right of the && will be ignored and not rendered.

//Judgmental se utiliza para tener un 50% de probabilidad de ser true o false
{
  import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);
}

//Hacer listas con map, este es el mejor metodo para crear listas con frecuencia
{
  import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map(person =>
  // expression goes here:
  <li>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
}

// Uso del atributo keys para renderizar listas en React 

//keys don’t do anything that you can see! React uses them internally to keep track of lists. If you don’t use keys when you’re supposed to, React might accidentally scramble your list-items into the wrong order.

//Not all lists need to have keys. A list needs keys if either of the following are true:

// 1. The list-items have memory from one render to the next. For instance, when a to-do list renders, each item must “remember” whether it was checked off. The items shouldn’t get amnesia when they render.
// 2. A list’s order might be shuffled. For instance, a list of search results might be shuffled from one render to the next.
{
  import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_'+i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLis}</ul>, document.getElementById('app'));
}

//Crear elementos en react con la funcion React.createElement
{
  const greatestDivEver = React.createElement('div',null, 'i am div');
}

// Uso de componentes en React
{
  import React from 'react';
import ReactDOM from 'react-dom';
 
class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};
 
ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
}

// importar React y React Dom
{
  import React from 'react';
  import ReactDOM from 'react-dom';
}

//Crear una clase componente

//React.Component is a JavaScript class. To create your own component class, you must subclass React.Component. You can do this by using the syntax class YourComponentNameGoesHere extends React.Component {}.

//Fuentes de clases

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
https://hacks.mozilla.org/2015/07/es6-in-depth-classes/
https://hacks.mozilla.org/2015/08/es6-in-depth-subclassing/
https://exploringjs.com/es6/ch_classes.html
*/
{
  import React from 'react';
import ReactDOM from 'react-dom';

//class x extends React.Component{}
class MyComponentClass extends React.Component{}
}

//Uso de la funcion render
{
  import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component{
  render(){
      return <h1>Hello world</h1>;
  }
};
}

//utilizando instancias de componente 
{
  <MyComponentClass />
}

// Uso de multilinea JSX en un componente
{
  <blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>
}

//Uso de atributos variables en un componente
{
  import React from 'react';
import ReactDOM from 'react-dom';

const owl = {
  title: 'Excellent Owl',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
};

// Component class starts here:
class Owl extends React.Component{
  render(){
    return (
      <div>
        <h1>{owl.title}</h1>
        <img src={owl.src} alt={owl.title}/>
      </div>
      );
  }
}

ReactDOM.render(
  <Owl />,
  document.getElementById('app')
);
}

//Poniendo logica en el render
{
  import React from 'react';
import ReactDOM from 'react-dom';

const friends = [
  {
    title: "Yummmmmmm",
    src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
  },
  {
    title: "Hey Guys!  Wait Up!",
    src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
  },
  {
    title: "Yikes",
    src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
  }
];

// New component class starts here:var x= 1;
class Friend extends React.Component{
render() {
 let friend = friends[1];
  return (
    <div>
    <h1>{friend.title}</h1>
    <img src={friend.src} />
    </div>
  );
}
}

ReactDOM.render(<Friend />, document.getElementById('app'));

}

//Usar un condicional in una funcion Render
{
  import React from 'react';
import ReactDOM from 'react-dom';

const fiftyFifty = Math.random() < 0.5;

// New component class starts here:
class TonightsPlan extends React.Component {
  render() {
    let task;
    if (fiftyFifty === true){
      task = "Tonight I'm going out WOOO";
    } else {
      ask = "Tonight I'm going to bed WOOO";
    }
    return(
      <h1>{task}</h1>
    )
  }
}

ReactDOM.render(<TonightsPlan />, document.getElementById('app'))
}

//Usar this en un componente

{
  import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
get name(){
  return 'Daniel Salazar'
}

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));
}

//https://dmitripavlutin.com/gentle-explanation-of-this-in-javascript/

//uso de event Listeners en un componente

{
  import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  scream() {
    alert('AAAAAAAAHHH!!!!!');
  }

  render() {
    return <button onClick={this.scream}>AAAAAH!</button>;
  }
}

ReactDOM.render(<Button />, document.getElementById('app'))
}

//Aplicar componente en un funcion de renderizado 
{
  //navBar.js
  import React from 'react';

class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}
  //ProfielPage.js

  import React from 'react';
import ReactDOM from 'react-dom';


class ProfilePage extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <h1>All About Me!</h1>
        <p>I like movies and blah blah blah blah blah</p>
        <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
      </div>
    );
  }
}
ReactDOM.render(<ProfilePage />, document.getElementById('app'));
}

//requerir un archivo
{
  import React from 'react';
import ReactDOM from 'react-dom';
import {NavBar} from './NavBar.js';
//import {NavBar} from './NavBar'; La extension js es asumida por defecto

}

//Exportar un archivo usando Ecmascrypt 6
{
  import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['home', 'blog', 'pics', 'bio', 'art', 'shop', 'about', 'contact'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}

}

//Acceso a props de componentes   (propp =  properties)

//el props de un componente es un objeto que contiene informacion de ese componente.
//Para ver informacion del componente tu utiliza this.props
//Gran parte de esta informacion es inutil pero una pequena parte es muy importante.

//Interaccion con componentes.
//https://www.codecademy.com/learn/react-101/modules/learn-react-components-interacting/cheatsheet
// Qeu hace jsonstringify: https://discuss.codecademy.com/t/what-does-json-stringify-do/392719

{
  import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{ stringProps }</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer />, document.getElementById('app'))
}

//pasar props a un componente (objeto)

//Puedes pasar propiedades a un componente declarandolas tal como un atributo
//<MyComponent foo="bar" /> <Example message="This is some top secret info." />0

{
  import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{ stringProps }</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById('app'))
}

//Renderizar  props de componentes
// Renderizar parametro firstname de <Greeting firstName='Daniel' /> en React 
{
  import React from 'react';
  import ReactDOM from 'react-dom';
  
  class Greeting extends React.Component {
    render() {
      return <h1>Hi there,{this.props.firstName}!</h1>;
    }
  }
  
  ReactDOM.render(
    <Greeting firstName='Daniel' />, 
    document.getElementById('app')
  );
}

//props is the name of the object that stores passed-in information. 
//this.props refers to that storage object. At the same time, each piece 
//of passed-in information is called a prop. This means that props could 
//refer to two pieces of passed-in information, or it could refer to the 
//object that stores those pieces of information :(

//The most common use of props is to pass information to a component, from 
//a different component. You haven’t done that yet, but it’s very similar to 
//what you’ve seen already.

//Pasar props desde un componente a un componente

//Archivo Greeting.js
{
  import React from 'react';

export class Greeting extends React.Component {
  render() {
    return <h1>Hi there, {this.props.name}!</h1>;
  }
};

}

//Archivo App.js
{
  import React from 'react';
import ReactDOM from 'react-dom';
import {Greeting} from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
          <Greeting name="Dolores" />
        
        <article>
          Latest newzz:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
}

//Renderizar diferentes UI basados en props (con codicionales)

//Greeting.js
{
  import React from 'react';
import ReactDOM from 'react-dom';

export class Greeting extends React.Component {
  render() {
  	if (this.props.signedIn === false) {
  	  return <h1>GO AWAY</h1>;
  	} else {
  	  return <h1>Hi there, {this.props.name}!</h1>;
  	}
  }
}
}
//App.js 
{
  import React from 'react';
import ReactDOM from 'react-dom';
import { Greeting } from './Greeting';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Hullo and, "Welcome to The Newzz," "On Line!"
        </h1>
        <Greeting name="Alison" signedIn={true} />
        <article>
          Latest:  where is my phone?
        </article>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
}
  
// Pasar un event handler como un prop

{
  import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker  />,
  document.getElementById('app')
);
}

// Recibir un event Handler como prop
//Talker.js
{
  import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button talk={this.talk} />;
  }
}

ReactDOM.render(
  <Talker  />,
  document.getElementById('app')
);
}

//Button.js , el componente que recibe el event handler
{

    import React from 'react';

  export class Button extends React.Component {
    render() {
      return (
        <button onClick={this.props.talk}>
          Click me!
        </button>
      );
    }
  }
}


//Handle event, onEvent y this,props.onEvent

//eventos como onClick tienen funcion especial cuando las utilizamos en Html 
//  <button onClick={this.props.onClick}>
//    Click me!
//  </button>

//sin embargo cunado utilizamos componentes son simplemente valores arbitrarios sin significado especial
//  <Button onClick={this.handleClick} />
//la razon es por que este ultimo es un elemento Html de Jsx sino una instancia de componente
//nombres como onClick solo crean event listeners si son usados en Html de JSX

//Button.js
{
  import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}>
        Click me!
      </button>
    );
  }
}
}

//Talker.js
{
  import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick} />;
  }
}

ReactDOM.render(
  <Talker  />,
  document.getElementById('app')
);
}

//this.props.children  //Renderizando listas
 
//this.props.children will return everything in between a component’s opening and closing JSX tags.
//you’ve seen have been self-closing tags, such as <MyComponentClass />. 
//They don’t have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.

//En el siguiente ejemplo vamos a observar como se renderiza una lista utilizando esta propiedad
//y se aniade una s al titulo si la lista es plurar o no si es singular
//List.js
{
  import React from 'react';

export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}
}

//App.js
{
  import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Daniel el mas martines</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);
}

//Default props
//Si alguien por causalidad evia un props sin contenido, seria mejor que hubiera un props por defecto
//para mostrar un contenido en su lugar como se observa en la linjea 15 a no ser que declaremos 
//en reactdom ReactDOM.render(
// <Button text="" />, 
//  document.getElementById('app')
{
  import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
  render() {
    return (
      <button>
        {this.props.text}
      </button>
    );
  }
}

// defaultProps goes here:
Button.defaultProps = { text: 'Putooss'}

ReactDOM.render(
  <Button />, 
  document.getElementById('app')
);
}


// States

//Unlike props, a component’s stateis not passed in from the outside. A component decides its own state.


