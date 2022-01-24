/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params }) {
  const solutionName = 'TBS_SELF';
  return fetch(
    `http://10.30.242.137:8080/tbsAutomation-restAPI/pattern?solutionName=${solutionName}`
  );
}
