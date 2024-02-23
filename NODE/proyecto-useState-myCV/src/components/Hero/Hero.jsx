import "./Hero.css"


export const Hero = ({hero}) => {
  return (
    <div className="hero">
        <img src="{hero.image}" alt="" />
        <div className="card">
            <h2>{hero.name}{hero.surname}
            </h2>
            <p>🗺️{hero.city}</p>
            <p>🗓️{hero.birthDate}</p>
            <p>
            📧
            <a href={"mainlto:"+ hero.email}>moniquemendess@live.com</a>
            </p>
            <p>

                <p>📱{hero.phone}</p>
                <p>💾
                    <a href={hero.gitHub}></a>
                </p>
            </p>



        </div>

    </div>
  )
}
