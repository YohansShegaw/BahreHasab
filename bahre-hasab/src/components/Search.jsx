import { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Search({ year, setYear }) {
  const [day, setDay] = useState("");
  const [yonday, setYonDay] = useState("");
  const [tewsak, setTewsak] = useState(0);
  // const [wer, setWer] = useState(0);
  // const [abiyTom1, setAbiyTsom] = useState("");

  const abiyTsomTewsak = 14;
  const debrezeytTewsak = 11;
  const hosaenaTewsak = 2;
  const sqletTewsak = 7;
  const tnsaeTewsak = 9;
  const rkbeKahnTewsak = 3;
  const ergetTewsak = 18;
  const piraqlitosTewsak = 28;
  const tsomeHawariyatTewsak = 29;
  const tsomeDhnetTewsak = 1;
  // const meskerem = 1;
  // const tiqmt = 2;
  // const hidar = 3;
  // const tahsas = 4;
  // const tir = 5;
  // const yekatit = 6;
  // const megabit = 7;
  // const miyazya = 8;
  // const gnbot = 9;
  // const sene = 10;
  // const hamle = 11;
  // const nehase = 12;

  const አመተ_ፍዳ = 5500;
  const ጥንተ_አበቅቴ = 11; //365 -354
  const ጥንተ_መጥቅዕ = 19;
  let አመተ_አለም = አመተ_ፍዳ + parseInt(year);
  let መጠነ_ራብዒት = parseInt(አመተ_አለም / 4);
  let ዕለት = (አመተ_አለም + መጠነ_ራብዒት) % 7;
  // let ዕለት = sumofAAandDB4 % 7;
  let ወንበር = (አመተ_አለም % 19) - 1;
  let መደብ = ወንበር + 1;
  let አበቅቴ = (ጥንተ_አበቅቴ * ወንበር) % 30;
  let መጥቅዕ = (ጥንተ_መጥቅዕ * ወንበር) % 30;
  let ጥንተ_ዮን = ((አመተ_አለም + መጠነ_ራብዒት) % 7) - 1;
  let አጽፈ፟ፈ_ወርሃ = መጥቅዕ <= 14 ? 2 * 2 : 1 * 2;
  let awde_elet = (መጥቅዕ + አጽፈ፟ፈ_ወርሃ + ጥንተ_ዮን) % 7;
  let መባጃ_ሃመር = (መጥቅዕ + parseInt(tewsak)) % 30;
  let abiyTom = (መባጃ_ሃመር + abiyTsomTewsak) % 30;
  let debreZeyt = (መባጃ_ሃመር + debrezeytTewsak) % 30;
  let hosaena = (መባጃ_ሃመር + hosaenaTewsak) % 30;
  let sqlet = (መባጃ_ሃመር + sqletTewsak) % 30;
  let tnsae = (መባጃ_ሃመር + tnsaeTewsak) % 30;
  let rkbeKahn = (መባጃ_ሃመር + rkbeKahnTewsak) % 30;
  let erget = (መባጃ_ሃመር + ergetTewsak) % 30;
  let piraqlitos = (መባጃ_ሃመር + piraqlitosTewsak) % 30;
  let tsomeHawariyat = (መባጃ_ሃመር + tsomeHawariyatTewsak) % 30;
  let tsomeDhnet = (መባጃ_ሃመር + tsomeDhnetTewsak) % 30;

  useEffect(() => {
    //////////////////////////////// New year ዕለት using ማክሰኞ ////////////////
    if (ዕለት === 0) {
      setDay("ሰኞ");
    } else if (ዕለት === 1) {
      setDay("ማክሰኞ");
    } else if (ዕለት === 2) {
      setDay("ረቡዕ");
    } else if (ዕለት === 3) {
      setDay("ሀሙስ");
    } else if (ዕለት === 4) {
      setDay("አርብ");
    } else if (ዕለት === 5) {
      setDay("ቅዳሜ");
    } else if (ዕለት === 6) {
      setDay("እሁድ");
    } else {
      setDay("___");
    }

    //////////////////New year ዕለት using ጥንተ_ዮን(ረቡዕ) ///////////
    if (ጥንተ_ዮን === -1) {
      setYonDay("ሰኞ");
    } else if (ጥንተ_ዮን === 0) {
      setYonDay("ማክሰኞ");
    } else if (ጥንተ_ዮን === 1) {
      setYonDay("ረቡዕ");
    } else if (ጥንተ_ዮን === 2) {
      setYonDay("ሀሙስ");
    } else if (ጥንተ_ዮን === 3) {
      setYonDay("አርብ");
    } else if (ጥንተ_ዮን === 4) {
      setYonDay("ቅዳሜ");
    } else if (ጥንተ_ዮን === 5) {
      setYonDay("እሁድ");
    } else {
      setYonDay("___");
    }
    ////////////////////////////////to Find Tewsak ///////////////////
    if (awde_elet === 0) {
      setTewsak(8);
    } else if (awde_elet === 1) {
      setTewsak(7);
    } else if (awde_elet === 2) {
      setTewsak(6);
    } else if (awde_elet === 3) {
      setTewsak(5);
    } else if (awde_elet === 4) {
      setTewsak(4);
    } else if (awde_elet === 5) {
      setTewsak(3);
    } else if (awde_elet === 6) {
      setTewsak(2);
    }

    // function months() {
    //   if (መጥቅዕ <= 14) {
    //     setWer(yekatit);
    //   } else if (መጥቅዕ > 14) {
    //     setWer(tir);
    //   }
    // }
    // months();

    // console.log("abiyTom = " + abiyTom);
    // function AbiyTsom() {
    //   if (wer == 5) {
    //     if (መባጃ_ሃመር >= abiyTom) {
    //       setAbiyTsom(`የካቲት ${abiyTom === 0 ? 30 : abiyTom}-${year} ዓም ይውላል።`);
    //     } else {
    //       setAbiyTsom(`ጥር ${abiyTom === 0 ? 30 : abiyTom}-${year} ዓም ይውላል።`);
    //     }
    //   } else if (wer == 6) {
    //     if (abiyTom > መባጃ_ሃመር) {
    //       setAbiyTsom(`የካቲት ${abiyTom === 0 ? 30 : abiyTom}-${year} ዓም ይውላል።`);
    //     } else {
    //       setAbiyTsom(`መጋቢት ${abiyTom === 0 ? 30 : abiyTom}-${year} ዓም ይውላል።`);
    //     }
    //   }
    // }
    // AbiyTsom();
  }, [year]);

  return (
    <div className={styles.list}>
      <div className={styles.searchComponent}>
        {" "}
        <input
          className={styles.input}
          type="number"
          onChange={(e) => setYear(e.target.value)}
          value={year}
        />
      </div>
      <div className={styles.list1}>
        <div className={styles.list2}>
          <h3>መስከረም 1 </h3>
          <p>{day} ይውላል ፡፡</p>
        </div>

        <div className={styles.list2}>
          <h3>ወንበር </h3>
          <p>{ወንበር}</p>
        </div>

        <div className={styles.list2}>
          <h3>መደብ </h3>
          <p>{መደብ}</p>
        </div>

        <div className={styles.list2}>
          <h3>አበቅቴ </h3>
          <p>{አበቅቴ}</p>
        </div>

        <div className={styles.list2}>
          <h3>መጥቅዕ </h3>
          <p>{መጥቅዕ === 0 ? 30 : መጥቅዕ}</p>
        </div>

        <div className={styles.list2}>
          <h3>በዓለ መጥቅዕ </h3>
          <p>{መጥቅዕ <= 14 ? "ጥቅምት" : "መስከረም"}</p>
        </div>

        <div className={styles.list2}>
          {" "}
          <h3>ጥንተ ዮን </h3>
          <p>{yonday}</p>
        </div>

        <div className={styles.list2}>
          <h3>መባጃ ሃመር </h3>
          <p>{መባጃ_ሃመር === 0 ? 30 : መባጃ_ሃመር}</p>
        </div>

        <div className={styles.list2}>
          <h3>ነነዌ </h3>
          <p>
            {መጥቅዕ <= 14
              ? `የካቲት ${መባጃ_ሃመር === 0 ? 30 : መባጃ_ሃመር}-${year} ዓም ይውላል።`
              : `ጥር ${መባጃ_ሃመር === 0 ? 30 : መባጃ_ሃመር}-${year} ዓም ይውላል።`}
          </p>
        </div>

        <div className={styles.list2}>
          <h3>ዐቢይ ጾም </h3>
          <p>{abiyTom}</p>
        </div>

        <div className={styles.list2}>
          <h3>ደብረ ዘይት </h3>
          <p>{debreZeyt === 0 ? 30 : debreZeyt}</p>
        </div>

        <div className={styles.list2}>
          <h3>ሆሳዕና </h3>
          <p>{hosaena === 0 ? 30 : hosaena}</p>
        </div>

        <div className={styles.list2}>
          <h3>ስቅለት </h3>
          <p>{sqlet === 0 ? 30 : sqlet}</p>
        </div>

        <div className={styles.list2}>
          {" "}
          <h3>ትንሳዔ </h3>
          <p>{tnsae === 0 ? 30 : tnsae}</p>
        </div>

        <div className={styles.list2}>
          <h3>ርክበ ካህን </h3>
          <p>{rkbeKahn === 0 ? 30 : rkbeKahn}</p>
        </div>

        <div className={styles.list2}>
          <h3>ዕርገት </h3>
          <p>{erget === 0 ? 30 : erget}</p>
        </div>

        <div className={styles.list2}>
          <h3>ጲራቅሊጦስ </h3>
          <p>{piraqlitos === 0 ? 30 : piraqlitos}</p>
        </div>

        <div className={styles.list2}>
          {" "}
          <h3>ጾመ ሃዋሪያት </h3>
          <p>{tsomeHawariyat === 0 ? 30 : tsomeHawariyat}</p>
        </div>

        <div className={styles.list2}>
          <h3>ጾመ ድህነት </h3>
          <p>{tsomeDhnet === 0 ? 30 : tsomeDhnet}</p>
        </div>
      </div>
    </div>
  );
}
