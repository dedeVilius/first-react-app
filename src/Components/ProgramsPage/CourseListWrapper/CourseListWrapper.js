import CourseItem from "../CourseItem/CourseItem";

function CourseListWrapper() {
  return (
    <main>
      <div className="main-content-wrapper">
        <CourseItem
          logo='https://codeacademy.lt/wp-content/uploads//2021/03/Studijos101_dark-1.svg'
          sticker='Startas - 2023 rudenį'
          title='Studijos 101'
          description='Naujos kartos studijos - alternatyva universitetiniam išsilavinimui trunkanti 6 mėnesius. Studijų metu įgysi pradedančių ir pažengusių programavimo žinias, kurios padės atverti darbo rinkos duris.'
          typeCategory='1+2 lygis'
          typeDate='Dienomis' />
        <CourseItem
          logo='https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg'
          sticker='Finansuojama UŽT'
          title='Web dizainas UX/UI (223002606)'
          description='Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.'
          typeCategory='Finansuojama UŽT - dirbantiems'
          typeDate='Dienomis' />
        <CourseItem
          logo='https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg'
          sticker='Finansuojama UŽT'
          title='Web dizainas UX/UI (223002606)'
          description='Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.'
          typeCategory=''
          typeDate='Dienomis' />
        <CourseItem
          logo='https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg'
          sticker=''
          title='Web Dizainas UX/UI – pažengusių'
          description='Web dizaineris privalo užtikrinti ne tik patrauklų svetainės vaizdą, informatyvumą, bet ir patogumą – suderinti pateikiamą informaciją, vaizdus bei navigaciją: kitaip tariant, įlįsti į vartotojo kailį.'
          typeCategory='2 lygis'
          typeDate='Vakarais' />
        <CourseItem
          logo='https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg'
          sticker=''
          title='Web Design (UX/UI) – Beginners'
          description='Web design (UX / UI) is a prerequisite for page life. It is the presentation of information in a visual way in order to achieve the best user experience and to maximize its convenience and benefits.'
          typeCategory='Courses in English'
          typeDate='Evenings' />
        <CourseItem
          logo='https://codeacademy.lt/wp-content/uploads//2021/05/UI_dark.svg'
          sticker='Populiarus'
          title='Web Dizainas UX/UI – pradedančių'
          description='Web dizainas UX/UI yra būtina puslapio gyvybės sąlyga. Tai informacijos pateikimas vizualiu būdu siekiant geriausios vartotojo patirties ir maksimaliai atsižvelgiant į jo patogumą bei teikiamą naudą.'
          typeCategory='1 lygis'
          typeDate='Vakarais' />
      </div>
    </main>
  )
}

export default CourseListWrapper;