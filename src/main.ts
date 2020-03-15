// interface Person {
//   firstName: string,
//   lastName: string
// }

// class Student {
//   fullName: string;
//   constructor(public firstName: string, public middleInitial: string, public lastName: string) {
//       this.fullName = firstName + " " + middleInitial + " " + lastName;
//   }
// }

// class Test {
//   a = 3
//   A() {
//     console.log(this.a)
//   }
//   B = () => {
//     console.log(this.a)
//   }
//   C() {
//     this.A();
//   }
// }

// new Test().C()



// let arr: Array<string | number>;
// let arr2: Array<string> = [ 'foo', 'bar' ];
// arr = arr2;
// arr.push( 3 );
// arr2[ 2 ].toUpperCase();

// let arr3: Array<string | number> = [ 'foo', 3 ];
// let arr4: Array<string> = arr3;

// function messUpTheArray ( arr: Array<string | number> ): void {
//   arr.push( 3 );
// }

// const strings: Array<string> = [ 'foo', 'bar' ];
// messUpTheArray( strings );

// const s: string = strings[ 2 ];
// console.log( s.toLowerCase() );

// class Example {
//   foo ( maybe: number | undefined ) { }
//   str ( str: string ) { }
//   compare ( ex: Example ) { }
// }

// class Override extends Example {
//   foo ( maybe: number ) {
//     maybe.toFixed( 3 );
//   } // Bad: should have error.
//   str ( str: 'override' ) { } // Bad: should have error.
//   compare ( ex: Override ) { } // Bad: should have error.
// }

// var objA: Override = new Override();
// var objB: Example = objA;
// objB.foo( undefined );

// function readFile ( path: string ): Promise<any> {
//   return new Promise<string>( ( res, rej ) => { res( "hi" ) } );
// }

// let file = readFile( "./index.js" );
// file.toUpperCase()

interface Test {
  a: string;
  b: string;
}

let obj = {
  a: "asdf",
  b: "a13123"
};

function TypeCheck<T>(o: any): o is T {
  return true;
}

if(!TypeCheck<Test>(obj)) console.log("failed", obj);
/* obj 를 Test type 이라고 생각할 수 있음 */