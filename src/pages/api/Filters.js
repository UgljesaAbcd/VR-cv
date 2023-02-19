import { useState, useEffect } from 'react';
import axios from 'axios';
import { Fab, Typography } from '@mui/material';

// moj-komentar - Ovo mozes ovde da deklarises, ili cak u nekom posebnom fajlu gde bi drzao sve neke konstante
// const allMountains = [
//   { name: 'Bobija' },
//   { name: 'Canyon of Nera' },
//   { name: 'Goc' },
//   { name: 'Golija' },
//   { name: 'Homoljske mountains' },
//   { name: 'Maljen' },
//   { name: 'Lazarev Canyon' },
//   { name: 'Ovcar' },
//   { name: 'Rtanj' },
//   { name: 'Rudnik' },
//   { name: 'Suva Mountain' },
//   { name: 'Stolovi' },
//   { name: 'Tara' }
// ];

const Filters = ({ setPic, setHidePagination, width }) => {
  //Filtering all photos start
  const data = 'http://localhost:5000/photos';
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    axios.get(data).then(res => setFilter(res.data));
  }, [data]);
  // moj-komentar - ovde sam ostavio ovaj data dependecy primer (na par mesta sam izbrisao slicne primere), ali dependecy treba da budu samo state-vi, eventualno reference dobijene preko useRef
  // U ovom slucaju verujem da ti ne treba ovaj dependecy uopste, vec je dovoljno da bude i prazna ova zagrada (nagadjam).
  // Poenta ovih dipendesija u useEffect je da udje u ovu funkciju u effect-u svaki put kada se neki od dependecy-a promeni (tebi je u ovom slucaju data uvek isto)
  // ali cak i da se data menja, to ne treba da bude nijedna od ovih klasicnih varijabli var, let i const, jer kako se neka komponenta prerenderuje, kad promenis negde neki state (npr ovo setFilter),
  // on onda prodje kroz ovu komponentu ponovo, i onda ponovo deklarise tu data varijablu, odnosno dodeli joj novu referencu, sto ce reci, on ce uci u ovaj useEffect kad god promenis
  // taj filter, odnosno kad god pozoves setFilter, a tebi je data uvek isto. Sto ce reci da u ovom slucaju useEffect ne zavisi od data varijable, nego od filter state-a.
  // Govorim sta se sad trenutno desava u tvom kodu, ne tvrdim da je to pozeljno ili nepozeljno ponasanje.

  //Filtering all photos end

  const allMountains = [
    { name: 'Bobija' },
    { name: 'Canyon of Nera' },
    { name: 'Goc' },
    { name: 'Golija' },
    { name: 'Homoljske mountains' },
    { name: 'Maljen' },
    { name: 'Lazarev Canyon' },
    { name: 'Ovcar' },
    { name: 'Rtanj' },
    { name: 'Rudnik' },
    { name: 'Suva Mountain' },
    { name: 'Stolovi' },
    { name: 'Tara' }
  ];

  // moj-komentar - kada imas ovako neke konstante (allMountains je uvek isti array), onda to baci gore ispod importa. Jer sta se dogadja.
  // Kao sto sam pisao gore kod dependecy-a, ti kad god promenis neki onaj state (useState), ta komponenta ce da se prerenderuje.
  // Kad god se komponenta prerenderuje, onda on ponovo deklarise ovu varijablu iznova, a one stare se resi (odnosno on onu staru referencu negde u memoriji brise, a ponovo upisuje isti podatak, samo na nekom drugom mestu). Sto je suvisno.
  // E sad, kad ti gore iznad komponente deklarises ovu varijablu, on nju samo jednom deklarise, i to u trenutku kada pokrenes aplikaciju.

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '5px'
        }}
      >
        <Typography color='myColors.secondary' sx={{ fontSize: '18px' }}>
          Filters
        </Typography>
        <div
          style={{
            marginBottom: '10px',
            width: width > 899 ? '60%' : '20%',
            height: '2px',
            borderRadius: '1px',
            backgroundColor: '#0092FF'
          }}
        ></div>
      </div>
      {allMountains.map((item, id) => (
        <Fab
          key={id}
          sx={{
            margin: '0.2rem',
            boxShadow: 'none',
            border: 'solid 2px #F6BE3B'
          }}
          color='myColors'
          variant='extended'
          size='small'
          onClick={() => {
            setPic(() => filter.filter(i => i.mountain === item.name));
            setHidePagination(() => false);
          }}
        >
          <Typography
            variant='h4'
            color='myColors.white'
            sx={{ fontSize: '80%' }}
          >
            {' '}
            {item.name}{' '}
          </Typography>
        </Fab>
      ))}
    </div>
  );
};

export default Filters;
