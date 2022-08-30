const user = {
  name: "Иван",
  lastname: "Снитко",
  email: "snitko_89@mail.ru",
  id: "1",
  about: "Мой рассказ о своих увлечениях",
  avatar:
    "https://dm.henkel-dam.com/is/image/henkel/men_perfect_com_thumbnails_home_pack_400x400-wcms-international?scl=1&fmt=jpg",
};

const users = {
  0: { name: "Владислава", lastname: "Иванова", id: 4 },
  1: { name: "Юлия", lastname: "Петрова", id: 9 },
  2: { name: "Петр", lastname: "Александров", id: 3 },
  3: { name: "Константин", lastname: "Дмитриевич", id: 6 },
  4: { name: "Юрий", lastname: "Николаевич", id: 12 },
};

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}
export function getUsers() {
  return users;
}
