const stateDefault = {
  arrFilm: [
    {
      maPhim: 1333,
      tenPhim: "Trainwreckk",
      biDanh: "trainwreckk",
      trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/trainwreckk_gp05.jpg",
      moTa: "<p>Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.</p>",
      maNhom: "GP05",
      ngayKhoiChieu: "2021-01-11T00:00:00",
      danhGia: 10,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
        maPhim: 1333,
        tenPhim: "Trainwreckk",
        biDanh: "trainwreckk",
        trailer: "https://www.youtube.com/embed/2MxnhBPoIx4",
        hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/trainwreckk_gp05.jpg",
        moTa: "<p>Having thought that monogamy was never possible, a commitment-phobic career woman may have to face her fears when she meets a good guy.</p>",
        maNhom: "GP05",
        ngayKhoiChieu: "2021-01-11T00:00:00",
        danhGia: 10,
        hot: false,
        dangChieu: true,
        sapChieu: false,
      },
  ],
};

export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {



    default:
      return { ...state };
  }
};
