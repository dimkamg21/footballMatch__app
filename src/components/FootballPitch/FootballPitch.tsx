import "./FootballPitch.scss";

const FootballPitch = () => (
  <div className="ground">
    <div className="outline border"></div>
    <div className="box left border"></div>
    <div className="box-d left border"></div>
    <div className="box left small border"></div>
    <div className="box right border"></div>
    <div className="box-d right border"></div>
    <div className="box right small border"></div>
    <div className="spot left border"></div>
    <div className="spot right border"></div>
    <div className="spot center border"></div>
    <div className="center-line border"></div>
    <div className="center-circle border"></div>
    <div className="grass"></div>
  </div>
);

export default FootballPitch;
