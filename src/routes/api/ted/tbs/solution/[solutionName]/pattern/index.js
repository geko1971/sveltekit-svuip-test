/** @type {import('@sveltejs/kit').RequestHandler} */

// import data from './_patterns.json';

export async function get({ params }) {
  const { solutionName } = params;

  // return {
  //   status: 200,
  //   body: data,
  // };

  return fetch(
    `http://10.30.242.137:8080/tbsAutomation-restAPI/pattern?solutionName=${solutionName}`
  );
}
