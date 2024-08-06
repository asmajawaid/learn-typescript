Syntax Error
	tsc app.ts
The Output:

	app.ts:2:9 - error TS2551: Property 'loger' does not exist on type 'Console'. Did you mean 'log'?

	2 console.loger(message);
      ~~~~~

	../../../../../../usr/local/lib/node_modules/typescript/lib/lib.dom.d.ts:17095:5
	17095     log(...data: any[]): void;
          ~~~~~~~~~~~~~~~~~~~~~~~~~~
	'log' is declared here.


	Found 1 error in app.ts:2
Note that .js file has been generated but it is not valid.


Type Error:

Definition: A type error occurs when you try to use a value in a way that is inconsistent with its type.
Cause: This can happen when you attempt to perform operations that are not supported by the type of data, or when you try to assign a value of one type to a variable of a different type.
Detection: Type errors are often detected by TypeScript during the type checking phase. TypeScript's static type system helps catch type errors early, before your code runs, which can prevent runtime errors.