import React from 'react';

import './global.css'
import './App.css'
import './Sidebar.css'
import './Main.css'

function App() {

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" required />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15370827?s=460&u=72c8eff344676cd2b045e57675028a20b46b8a03&v=4" alt="Airtonmartins"></img>
              <div className="user-info">
                <strong>Airtonmartins</strong>
                <span>Python, Docker, Java</span>
              </div>
            </header>
            <p>Pythonista, Javista, Vulgo PaiDokcer e entusiasta da cultura Devops</p>
            <a href="https://github.com/Airtonmartins">Acessar perfil no GitHub</a> 
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15370827?s=460&u=72c8eff344676cd2b045e57675028a20b46b8a03&v=4" alt="Airtonmartins"></img>
              <div className="user-info">
                <strong>Airtonmartins</strong>
                <span>Python, Docker, Java</span>
              </div>
            </header>
            <p>Pythonista, Javista, Vulgo PaiDokcer e entusiasta da cultura Devops</p>
            <a href="https://github.com/Airtonmartins">Acessar perfil no GitHub</a> 
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15370827?s=460&u=72c8eff344676cd2b045e57675028a20b46b8a03&v=4" alt="Airtonmartins"></img>
              <div className="user-info">
                <strong>Airtonmartins</strong>
                <span>Python, Docker, Java</span>
              </div>
            </header>
            <p>Pythonista, Javista, Vulgo PaiDokcer e entusiasta da cultura Devops</p>
            <a href="https://github.com/Airtonmartins">Acessar perfil no GitHub</a> 
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/15370827?s=460&u=72c8eff344676cd2b045e57675028a20b46b8a03&v=4" alt="Airtonmartins"></img>
              <div className="user-info">
                <strong>Airtonmartins</strong>
                <span>Python, Docker, Java</span>
              </div>
            </header>
            <p>Pythonista, Javista, Vulgo PaiDokcer e entusiasta da cultura Devops</p>
            <a href="https://github.com/Airtonmartins">Acessar perfil no GitHub</a> 
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
