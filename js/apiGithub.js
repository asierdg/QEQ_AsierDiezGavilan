async function mostrarGithub(usuario) {
    const respuesta = await fetch("https://api.github.com/users/" + usuario);
    const datosUsuario = await respuesta.json();
    
    const contenedorGithub = document.getElementById("githubPerfil");
    contenedorGithub.innerHTML = `
        
        <a href="${datosUsuario.html_url}" target="_blank">
            <img src="${datosUsuario.avatar_url}" alt="Foto de perfil">
        </a>

        <br>
        <br>

        <a href="${datosUsuario.html_url}" target="_blank">
            ${datosUsuario.login}(${datosUsuario.public_repos})
        </a>
    `;
}