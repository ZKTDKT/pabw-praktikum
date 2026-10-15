const ALAMAT = 'data/proyek.json';

export async function ambilProyek(url) {
    const respons = await fetch(ALAMAT);

console.log('status:', respons.status,'ok',respons.ok);

if (!respons.ok) {
    throw new Error(`satatus: 'respons.status`);
}

return respons.json(); 
}