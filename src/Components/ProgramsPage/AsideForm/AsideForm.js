function AsideForm() {
  return (
    <form>
          <div className="filter-element">
            <label for="topic">Tema</label>
            <select name="topic" id="topic">
              <option value>Visos</option>
              <option value="Testavimas">Testavimas</option>
              <option value="Programavimas">Programavimas</option>
              <option value="Dizainas">Dizainas</option>
              <option value="Duomenys">Duomenys</option>
              <option value="Rinkodara">Rinkodara</option>
            </select>
          </div>
          <div className="filter-element">
            <label for="city">Vieta</label>
            <select name="city" id="city">
              <option value>Visos</option>
              <option value="online">Online</option>
              <option value="vilnius">Vilnius</option>
              <option value="kaunas">Kaunas</option>
              <option value="klaipeda">Klaipėda</option>
            </select>
          </div>
          <div className="filter-element">
            <label for="type">Tipas</label>
            <select name="type" id="type">
              <option value>Visi</option>
              <option value="Testavimas">Courses In English</option>
              <option value="Programavimas">Pradedančių kursai</option>
              <option value="Dizainas">Pažengusių kursai</option>
              <option value="Duomenys">1 + 2 lygis</option>
              <option value="Rinkodara">Studijos 101</option>
              <option value="Rinkodara">Finansuojama UŽT - nedirbantiems</option>
              <option value="Rinkodara">Finansuojama UŽT - dirbantiems</option>
            </select>
          </div>
          <div className="filter-element">
            <label>Laikas</label>
            <div className="filter-element-checkbox">
              <div className="filter-element-checkbox-option">
                <input type="checkbox" name="day" id="day" />
                <label for="day">Dienomis</label>
              </div>
              <div className="filter-element-checkbox-option">
                <input type="checkbox" name="night" id="night" />
                <label for="night">Vakarais</label>
              </div>
            </div>
          </div>
          <div className="filter-action">
            <a href="/#" className="bg-button">Išvalyti</a>
          </div>
        </form>
  )
}

export default AsideForm;