import hacker1 from  '../assets/hacker1.mp3'
import hacker2 from  '../assets/hacker2.mp3'
import hacker3 from  '../assets/hacker3.mp3'
import hacker4 from  '../assets/hacker4.mp3'
import hacker5 from  '../assets/hacker5.mp3'
import hacker6 from  '../assets/hacker6.mp3'
import hacker7 from  '../assets/hacker7.mp3'
import hacker8 from  '../assets/hacker8.mp3'
import hacker9 from  '../assets/hacker9.mp3'
import hacker10 from  '../assets/hacker10.mp3'
import hacker11 from  '../assets/hacker11.mp3'
import user1 from '../assets/user1.mp3'
import user2 from '../assets/user2.mp3'
import user3 from '../assets/user3.mp3'
import user4 from '../assets/user4.mp3'
import user5 from '../assets/user5.mp3'
import user6 from '../assets/user6.mp3'
import user7 from '../assets/user7.mp3'




export const auth = {
    login: 'Employee2137',
    password: 'okoń',
}

enum messgaeType {
    hacker = 'msg-hacker',
    user = 'msg-user',
}

export interface IStory {
    [key: string]: {
        message: string;
        type: messgaeType;
        audio: string;
        fnMsg?: string;
        fnOpt?: string;
    };
}

export const story: IStory = {
    m01: {
        message: 'Cześć Employee 2137, jak zapewne zauważyłeś, zablokowałem Ci dostęp do komputera, odblokuję Ci dostęp do wszystkich plików, Jednak muszisz spełnić moje żądania, BA zmienić sie i przeprosić. Jeśli nie bedziesz sie stosował do moich poleceń usune wszystkie dane z bazydanych do których masz dostęp, następnie zatre wszystkie ślady mojej obecności wina spadnie na ciebie a zwolnienie murowane. mam nadzieje ze sie rozumiemy.',
        type: messgaeType.hacker,
        audio: hacker1
    },
    m02: {
        message: "No to jak, dogadamy się? Bardzo nie chce wyleciec z roboty :(",
        type: messgaeType.user,
        fnMsg: 'm03',
        fnOpt: 'o00',
        audio: user1
    },
    m03: {
        message: "No dobra najpierw sie przedstawie  reprezentuje papieska bojwke ku chwale najwiekszego polskiego poalak, zeby nam sie dobrze rozmawialo wpisz w konsoli DJMUSIC gagatku",
        type: messgaeType.hacker,
        audio: hacker2
    },
    m04: {
        message: "Teraz mozemy rozmawiac, wytmacz mi prosze twoje wpisy na forum naprzyklad ten \"Jan Paweł II wiedział i nie powiedział\". albo \"Jan Paweł grał w karty dlatego miał łep obdarty\". Jak to mozna bylo napisac o najwiekszym polskim polaku? ",
        type: messgaeType.hacker,
        audio: hacker3,
        fnOpt: 'o02',
    },
    m05: {
        message: "To nie ja to moj kolega z pracy",
        type: messgaeType.user,
        audio: user2,
        fnOpt: 'o00',
        fnMsg: 'm07'
    },
    m06: {
        message: "Przepraszam, nie wiem co mnie podkusiło",
        type: messgaeType.user,
        audio: user3,
        fnOpt: 'o00',
        fnMsg: 'm08'
    },
    m07: {
        message: "Nie sciemniaj mi tu! ",
        type: messgaeType.hacker,
        audio: hacker4,
        fnMsg: 'm09'
    },
    m08: {
        message: "Umiesz sie przyznać do błedu to dobry znak. ",
        type: messgaeType.hacker,
        audio: hacker5,
        fnMsg: 'm09'
    },
    m09: {
        message: "Dobra stało sie wybacze ci wiesz dlaczego?. Wiesz Jak pan Jezus powiedział?",
        type: messgaeType.hacker,
        audio: hacker6,
        fnOpt: 'o03'
    },
    m10: {
        message: "Tak jak Pan Jezus powiedział",
        type: messgaeType.user,
        audio: user4,
        fnOpt: 'o00',
        fnMsg: 'm99'
    },
    m11: {
        message: "Że należy wybaczać?",
        type: messgaeType.user,
        audio: user5,
        fnOpt: 'o00',
        fnMsg: 'm13'
    },
    m12: {
        message: "Nie, żeby wybaczać. ",
        audio: hacker7,
        type: messgaeType.hacker,
        fnMsg: 'm99'
    },
    m13: {
        message: "Tak dobrze robisz postepy w nauce.",
        type: messgaeType.hacker,
        fnMsg: 'm14',
        audio: hacker8
    },
    m14: {
        message: "Pamietaj zło dobrem zwyciężaj, a złe uczynki należy odczynić w zwiazku z tym przygotowałem specjalną komende dla ciebie wpisz w konsoli TOITAKBYNICNIEDALO i zobaczysz co sie stanie.",
        type: messgaeType.hacker,
        audio: hacker9,
    },
    m15: {
        message: "No to to masz zaliczone, ostatnie pytanie i Cie odblokuje skoro tak dobrze sie dogadujemy. Jak miał na nazwisko Jan Paweł II?",
        audio: hacker10,
        fnOpt: 'o04',
        type: messgaeType.hacker,
    },
    m16: {
        message: "Jan?",
        type: messgaeType.user,
        audio: user6,
        fnOpt: 'o00',
        fnMsg: 'm99'
    },
    m17: {
        message: "Paweł?",
        type: messgaeType.user,
        audio: user7,
        fnOpt: 'o00',
        fnMsg: 'm99'
    },
    m99: {
        message: "Miarka sie przebrała, pożegnaj sie z pracą.",
        type: messgaeType.hacker,
        audio: hacker11,
        fnOpt: 'o00'
    },
}

enum optionType {
    tip = 'msg-option tip',
    normal = 'msg-option',

}

interface IOption {
    text: string;
    className: string;
    disabled?: boolean;
    title?: string;
    fn?: string;
}

interface IOptions {
    [key: string]: {
        [key: string]: IOption;
    };
}

export const options: IOptions = {

    o01: {
        option1: {
            text: 'restart komputera',
            className: optionType.tip,
            disabled: true,
            title: 'Aby zresetować komputer wpisz w konsoli shutdown',
        },
        option2: {
            text: 'dogadaj sie z hakerem',
            className: optionType.normal,
            fn: 'm02',
        },
    },
    o02: {
        option1: {
            text: 'To nie ja to moj kolega z pracy',
            className: optionType.normal,
            fn: 'm05',
        },
        option2: {
            text: 'Przepraszam, nie wiem co mnie podkusiło',
            className: optionType.normal,
            fn: 'm06',
        },
    },
    o03: {
        option1: {
            text: 'Tak jak Pan Jezus powiedział',
            className: optionType.normal,
            fn: 'm10',
        },
        option2: {
            text: "Że należy wybaczać?",
            className: optionType.normal,
            fn: 'm11',
        }
    },
    o04: {
        option1: {
            text: "Jan",
            className: optionType.normal,
            fn: 'm16',
        },
        option2: {
            text: "Paweł",
            className: optionType.normal,
            fn: 'm17',
        }
    }

}