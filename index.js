const CLIENT_ID = 'df6f4cdea50c01a31067';
const CLIENT_SECRET = 'ec400ab3575ca1b648dc2acf3492d3233e5c1782';

async function getUser(name) {
    const res = await fetch(`https://api.github.com/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`);

    const profile = await res.json();
    return profile;
}

document.querySelector('#search').addEventListener('submit', async(e) => {
    e.preventDefault();
    const username = document.querySelector('#findByUsername').value;

    // console.log(username);

    const profile = await getUser(username);

    console.log(profile);
})