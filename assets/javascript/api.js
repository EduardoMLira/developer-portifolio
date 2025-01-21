

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/EduardoMLira/projeto_curriculo/refs/heads/main/data/profile.json';
    const fetching = await fetch(url)
    return await fetching.json()
}
