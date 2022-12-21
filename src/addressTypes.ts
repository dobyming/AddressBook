//type 모듈화
interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

enum PhoneTypePlace {
  Home = 'home',
  Office = 'office',
  Studio = 'studio',
}

export { Contact, PhoneTypePlace }; //쓸 interface들은 코드 맨 아래에 선언
