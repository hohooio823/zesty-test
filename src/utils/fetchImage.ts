export default async function fetchImage(){
    const response = await fetch('https://coffee.alexflipnote.dev/random.json');
    const data = await response.json();
    return data["file"];
}