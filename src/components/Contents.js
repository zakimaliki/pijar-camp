import "../App.css";

function Contents() {
  return (
    <main class="pt-24 flex-1">
      <div class="mx-auto pb-20 -mt-4">
        <div class="justify-center flex px-5 lg:px-0 md:mb-6 bg-black-100 md:bg-white">
          <div class="flex flex-col-reverse md:grid grid-cols-12 lg:max-w-screen-xl z-2 gap-0 pb-16">
            <div class="md:col-span-3 col-span-12 hidden md:flex justify-center">
              <img
                alt=""
                class="max-w-1/2 mt-40 absolute"
                src="../img/image-left.png"
              />
            </div>
            <div class="md:col-span-6 col-span-12 text-center md:px-0 px-4 items-center flex flex-col z-2">
              <h3 class="my-4 font-bold md:text-54px text-3.5xl pt-8 md:pt-28 pb-4 md:leading-60px leading-9">
                Mulai Karir <br class="md:hidden" />
                Teknologi Bersama&nbsp;
                <br class="md:hidden" />
                <span class="text-orange-900">Pijar Camp</span>
                <div class="w-full flex md:justify-end justify-center md:pr-20">
                  <img alt="" class="md:w-auto w-44" src="../img/Vector.png" />
                </div>
              </h3>
              <p class="pb-8 max-w-lg">
                Ikuti program bootcamp intensif untuk meningkatkan kemampuan
                hingga sukses berkarir di bidang teknologi.
              </p>
              <a href="/#" class="pb-3 md:pb-14">
                <button
                  class="px-4 mb-7 h-12 hover:bg-blue-800 flex items-center justify-center rounded-lg h-10 md:h-12 text-white bg-primary hover:bg-blue-800"
                  type="button"
                >
                  <p className="text-reg">Pelajari Bootcamp</p>
                  <svg
                    fill="none"
                    height="28"
                    viewBox="0 0 28 28"
                    width="28"
                    xmlns="http://www.w3.org/2000/svg"
                    class="pl-1 ml-1"
                  >
                    <path
                      d="M12.8333 5.83317V18.8648L7.14001 13.1715C6.68501 12.7165 5.93834 12.7165 5.48334 13.1715C5.02834 13.6265 5.02834 14.3615 5.48334 14.8165L13.1717 22.5048C13.6267 22.9598 14.3617 22.9598 14.8167 22.5048L22.505 14.8165C22.96 14.3615 22.96 13.6265 22.505 13.1715C22.05 12.7165 21.315 12.7165 20.86 13.1715L15.1667 18.8648V5.83317C15.1667 5.1915 14.6417 4.6665 14 4.6665C13.3583 4.6665 12.8333 5.1915 12.8333 5.83317Z"
                      fill="#FFFFFF"
                    ></path>
                  </svg>
                </button>
              </a>
            </div>
            <div class="md:col-span-3 col-span-12 hidden md:flex justify-center">
              <img
                alt=""
                class="max-w-1/2 absolute -mt-24"
                src="../img/image-right.png"
              />
            </div>
          </div>
        </div>
        <div class="justify-center flex px-5 lg:px-0 md:mt-16">
          <div class="flex flex-col md:grid grid-cols-12 md:py-14 pb-14 pt-4 lg:max-w-screen-lg gap-2">
            <img
              alt=""
              class="absolute -mt-14 left-0 flex md:hidden"
              src="https://camp.pijarmahir.id/static/images/Ornament_left.svg"
            />
            <div class="col-span-6 hidden md:flex">
              <img alt="" src="../img/what_is_pijarcamp.png" />
            </div>
            <div class="md:col-start-7 md:col-span-6 col-span-11 md:pl-20 md:pt-36 pt-14 md:text-left">
              <div class="flex md:justify-start justify-center">
                <p class="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs">
                  TENTANG PIJAR CAMP
                </p>
              </div>
              <h3 class="md:text-4.5xl text-2.5xl font-bold mb-8 mt-5 flex flex-col md:block">
                Apa itu <span class="text-orange-900">Pijar Camp?</span>
              </h3>
              <p>
                Pijar Camp merupakan program bootcamp yang bertujuan untuk
                membantu kamu dalam meningkatkan kompetensi di bidang teknologi.
                Melalui program ini, kamu berkesempatan untuk dilatih langsung
                dengan mentor yang kompeten di bidangnya.
              </p>
            </div>
          </div>
        </div>
        <div class="justify-center flex lg:px-0 md:bg-white">
          <img
            alt=""
            class="absolute -mt-11 right-0 flex md:hidden"
            src="/static/images/Ornament_right.svg"
          />
          <div class="grid grid-cols-12 md:py-12 pt-6 lg:max-w-screen-2xl z-2">
            <div class="mb-4 md:col-span-6 col-span-12 md:pr-12 md:py-14 flex justify-end">
              <div class="max-w-lg md:text-left pt-6 md:pt-0">
                <div class="flex justify-center md:justify-start md:pb-4">
                  <p class="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs">
                    KEUNTUNGAN GABUNG PIJAR CAMP
                  </p>
                </div>
                <h3 class="md:text-4.5xl text-3xl font-bold mb-4 mt-5 px-8 md:leading-5xl flex flex-col md:table-row">
                  Kenapa Kamu Wajib Ikut Program
                  <span class="text-orange-900 md:leading-5xl">
                    Pijar Camp?
                  </span>
                </h3>
                <p class="md:pr-24 py-2 md:px-0 md:text-left">
                  Pijar Camp adalah Digital Skill Camp kolaborasi Pijar Mahir
                  dan Pijar Camp
                </p>
              </div>
            </div>
            <div class="md:col-span-3 col-span-12 bg-black-100 px-11 py-14 hidden md:grid">
              <img
                alt=""
                class="pb-7"
                src="https://camp.pijarmahir.id/static/icons/benefit_1.svg"
              />
              <p class="text-xl font-semibold pb-3">Bootcamp Berkualitas</p>
              <p>
                Peserta akan belajar coding dengan kurikulum industri secara
                intensif yang diajarkan langsung oleh mentor berkompeten di
                bidangnya.
              </p>
            </div>
            <div class="md:col-span-3 col-span-12 px-11 py-14 hidden md:grid">
              <img
                alt=""
                class="pb-7"
                src="https://camp.pijarmahir.id/static/icons/benefit_2.svg"
              />
              <p class="text-xl font-semibold pb-3">
                Sertifikasi yang Kredibel
              </p>
              <p>
                Peserta akan dibekali dengan bukti sertifikat kredibel yang
                telah diterbitkan oleh pihak yang terpercaya
              </p>
            </div>
            <div class="col-span-3 hidden md:grid"></div>
            <div class="md:col-span-3 col-span-12 px-11 py-14 bg-black-100 hidden md:grid">
              <img
                alt=""
                class="absolute -ml-44 -mt-28"
                src="https://camp.pijarmahir.id/static/images/arrow_benefit.svg"
              />
              <img
                alt=""
                class="pb-7"
                src="https://camp.pijarmahir.id/static/icons/benefit_3.svg"
              />
              <p class="text-xl font-semibold pb-3">Belajar Dulu Baru Bayar</p>
              <p>
                Melalui program ISA (Income Share Agreement) peserta hanya perlu
                membayar biaya pelatihan setelah bekerja dan menerima gaji
                pertama.
              </p>
            </div>
            <div class="md:col-span-3 col-span-12 px-11 py-14 hidden md:grid bg-white">
              <img
                alt=""
                class="pb-7"
                src="https://camp.pijarmahir.id/static/icons/benefit_4.png"
              />
              <p class="text-xl font-semibold pb-3">Pembekalan Karir</p>
              <p>
                Peserta juga akan dilatih untuk persiapan karir dengan matang,
                dari membuat CV hingga simulasi interview pekerjaan
              </p>
            </div>
            <div class="md:col-span-3 col-span-12 px-11 py-14 bg-black-100 hidden md:grid">
              <img
                alt=""
                class="pb-7"
                src="https://camp.pijarmahir.id/static/icons/benefit_5.svg"
              />
              <p class="text-xl font-semibold pb-3">Disalurkan Kerja</p>
              <p>
                Tidak hanya belajar, kamu juga berkesempatan untuk membangun
                karir dengan 270+ perusahaan rekanan kami
              </p>
            </div>
            <div class="content md:hidden col-span-12 -mb-2">
              <div class="contents">
                <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                  <div
                    class="swiper-wrapper"
                    style={{ transitionduration: "500ms" }}
                  >
                    <div
                      class="swiper-slide swiper-slide-duplicate"
                      data-swiper-slide-index="4"
                    >
                      <div class="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                        <img
                          alt=""
                          class="m-auto pb-5"
                          src="https://camp.pijarmahir.id/static/icons/benefit_5.svg"
                        />
                        <p class="text-xl font-semibold pb-3">
                          Disalurkan Kerja
                        </p>
                        <p class="text-black-80" style={{ minheight: "96px" }}>
                          Tidak hanya belajar, kamu juga berkesempatan untuk
                          membangun karir dengan 270+ perusahaan rekanan kami
                        </p>
                      </div>
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="0">
                      <div class="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                        <img
                          alt=""
                          class="m-auto pb-5"
                          src="https://camp.pijarmahir.id/static/icons/benefit_1.svg"
                        />
                        <p class="text-xl font-semibold pb-3">
                          Bootcamp Berkualitas
                        </p>
                        <p class="text-black-80" style={{ minheight: "96px" }}>
                          Peserta akan belajar coding dengan kurikulum industri
                          secara intensif yang diajarkan langsung oleh mentor
                          berkompeten di bidangnya.
                        </p>
                      </div>
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="1">
                      <div class="md:col-span-3 col-span-12 px-11 pt-14 pb-32 bg-white">
                        <img
                          alt=""
                          class="m-auto pb-5"
                          src="https://camp.pijarmahir.id/static/icons/benefit_2.svg"
                        />
                        <p class="text-xl font-semibold pb-3">
                          Sertifikasi yang Kredibel
                        </p>
                        <p class="text-black-80" style={{ minheight: "96px" }}>
                          Peserta akan dibekali dengan bukti sertifikat kredibel
                          yang telah diterbitkan oleh pihak yang terpercaya
                        </p>
                      </div>
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="2">
                      <div class="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                        <img
                          alt=""
                          class="m-auto pb-5"
                          src="https://camp.pijarmahir.id/static/icons/benefit_3.svg"
                        />
                        <p class="text-xl font-semibold pb-3">
                          Belajar Dulu Baru Bayar
                        </p>
                        <p class="text-black-80" style={{ minheight: "96px" }}>
                          Melalui program ISA (Income Share Agreement) peserta
                          hanya perlu membayar biaya pelatihan setelah bekerja
                          dan menerima gaji pertama.
                        </p>
                      </div>
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="3">
                      <div class="bg-white md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                        <img
                          alt=""
                          class="m-auto pb-5"
                          src="/static/icons/benefit_4.png"
                        />
                        <p class="text-xl font-semibold pb-3">
                          Pembekalan Karir
                        </p>
                        <p class="text-black-80" style={{ minheight: "96px" }}>
                          Peserta juga akan dilatih untuk persiapan karir dengan
                          matang, dari membuat CV hingga simulasi interview
                          pekerjaan
                        </p>
                      </div>
                    </div>
                    <div class="swiper-slide" data-swiper-slide-index="4">
                      <div class="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                        <img
                          alt=""
                          class="m-auto pb-5"
                          src="https://camp.pijarmahir.id/static/icons/benefit_5.svg"
                        />
                        <p class="text-xl font-semibold pb-3">
                          Disalurkan Kerja
                        </p>
                        <p class="text-black-80" style={{ minheight: "96px" }}>
                          Tidak hanya belajar, kamu juga berkesempatan untuk
                          membangun karir dengan 270+ perusahaan rekanan kami
                        </p>
                      </div>
                    </div>
                    <div
                      class="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
                      data-swiper-slide-index="0"
                    >
                      <div class="bg-blue-10 md:col-span-3 col-span-12 px-11 pt-14 pb-32">
                        <img
                          alt=""
                          class="m-auto pb-5"
                          src="https://camp.pijarmahir.id/static/icons/benefit_1.svg"
                        />
                        <p class="text-xl font-semibold pb-3">
                          Bootcamp Berkualitas
                        </p>
                        <p class="text-black-80" style={{ minheight: "96px" }}>
                          Peserta akan belajar coding dengan kurikulum industri
                          secara intensif yang diajarkan langsung oleh mentor
                          berkompeten di bidangnya.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="w-full flex justify-center items-center flex-wrap p-2"
                    slot="container-end"
                  >
                    <div class="flex items-center justify-start flex-wrap -mt-20 w-1/2">
                      <div class="pagination_el relative z-2 text-left swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                    </div>
                    <div class="flex items-center justify-end flex-wrap w-1/2 -mt-20">
                      <button
                        aria-label="prev-benefit"
                        class="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center border-2.5 z-2 mr-2"
                        style={{ top: "calc(50% - 36px)" }}
                        type="button"
                      >
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 20 20"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </button>
                      <button
                        aria-label="next-benefit"
                        class="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center border-2.5 z-2"
                        style={{ top: "calc(50% - 36px)" }}
                        type="button"
                      >
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 20 20"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="justify-center flex px-5 lg:px-0 md:mt-16"
          id="about-program"
        >
          <div class="flex flex-col md:grid grid-cols-12 md:py-14 pb-14 pt-6 lg:max-w-screen-lg gap-2">
            <div class="md:col-span-6 col-span-12 md:pr-28 md:pt-16 pt-10  md:text-left">
              <div class="flex justify-center md:justify-start">
                <p class="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs">
                  TENTANG PROGRAM PIJAR CAMP
                </p>
              </div>
              <img
                alt=""
                class="absolute pt-16 mt-1 -ml-4 hidden md:flex"
                src="https://camp.pijarmahir.id/static/images/Oval.png"
              />
              <h3 class="md:text-4.5xl text-3xl font-bold mb-8 mt-5 md:leading-5xl mx-3 md:mx-0">
                Program Intensif Bootcamp
              </h3>
              <p>
                Di bootcamp ini, kamu akan mengikuti program komprehensif dan
                pembelajaran yang intensif bersama mentor secara full-time
                dengan kurikulum lengkap. Waktu belajarnya adalah 5 hari kerja
                dalam satu minggu. Kamu juga akan disiapkan untuk berkarir dan
                dihubungkan bergabung dengan perusahaan rekanan.
              </p>
              <div class="flex justify-center md:justify-start">
                <button
                  class="px-4 mb-7 h-12 mt-8 hover:bg-blue-800 flex items-center justify-center rounded-lg h-10 md:h-12 text-white bg-primary hover:bg-blue-800"
                  type="button"
                >
                  <p className="text-reg">Lihat Kelas Bootcamp</p>
                </button>
              </div>
            </div>
            <div class="col-span-6 md:grid hidden">
              <img
                alt=""
                src="https://camp.pijarmahir.id/static/images/about.png"
              />
            </div>
          </div>
        </div>
        <div class="justify-center flex px-5 lg:px-0 styles_bg_blue__g8y_l">
          <div class="md:py-24 py-4 lg:max-w-screen-lg z-2">
            <div class="text-center md:mb-12 mb-7 text-white flex flex-col items-center md:mx-0 mx-6">
              <div class="flex">
                <p class="bg-orange-800 rounded-7xl px-4 py-2 tracking-wider font-bold text-xs">
                  TESTIMONI ALUMNI
                </p>
              </div>
              <h3 class="md:text-4.5xl text-3xl font-bold mb-4 mt-4 md:leading-5xl">
                Cerita mereka dari <br class="md:hidden" />
                para alumni
              </h3>
              <p>
                Kamu akan menjadi programmer dengan kemampuan yang mumpuni
                bersama
                <br class="hidden md:grid" />
                760+ lulusan terbaik Pijar Camp
              </p>
            </div>
            <div class="px-4 md:px-0 md:grid grid-cols-12 hidden">
              <div class="px-8 rounded-2xl col-span-4 text-center flex flex-col items-center">
                <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                  <img
                    alt=""
                    class="rounded-full"
                    src="https://camp.pijarmahir.id/static/images/testimoni-1.png"
                  />
                </div>
                <div class="mt-2 bg-white rounded-lg p-7 flex flex-col items-center md:h-auto h-96">
                  <p class="pt-4">
                    “Pijar Camp membantu saya belajar programming dari 0 dengan
                    penyampaian materi sesuai kebutuhan industri serta
                    lingkungan belajar yang sangat kekeluargaan”
                  </p>
                  <p class="font-semibold text-lg pt-8">Hilmi Khoirullah</p>
                  <div class="rounded-full pt-3">
                    <img
                      alt=""
                      class="max-h-screen"
                      src="https://camp.pijarmahir.id/static/logo/Alodokter.svg"
                    />
                  </div>
                </div>
              </div>
              <div class="px-8 rounded-2xl col-span-4 text-center flex flex-col items-center">
                <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                  <img
                    alt=""
                    class="rounded-full"
                    src="https://camp.pijarmahir.id/static/images/testimoni-2.png"
                  />
                </div>
                <div class="mt-2 bg-white rounded-lg p-7 flex flex-col items-center md:h-auto h-96">
                  <p class="pt-4">
                    “Perjanjian income sharing yang ditawarkan Pijar Camp bisa
                    dibilang menarik &amp; menjadi sesuatu yang baru saat itu,
                    karena bootcamp lain belum menerapkan hal tersebut.”
                  </p>
                  <p class="font-semibold text-lg pt-8">Setiawan Restu Aji</p>
                  <div class="rounded-full pt-3">
                    <img
                      alt=""
                      class="max-h-screen"
                      src="https://camp.pijarmahir.id/static/logo/Tokopedia.svg"
                    />
                  </div>
                </div>
              </div>
              <div class="px-8 rounded-2xl col-span-4 text-center flex flex-col items-center">
                <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                  <img
                    alt=""
                    class="rounded-full"
                    src="https://camp.pijarmahir.id/static/images/testimoni-3.png"
                  />
                </div>
                <div class="mt-2 bg-white rounded-lg p-7 flex flex-col items-center md:h-auto h-96">
                  <p class="pt-4">
                    Pijar Camp sangat membatu saya untuk belajar. Baik dari
                    tempatnya yang nyaman &amp; teman-teman yang kompetitif. Dan
                    sangat menarik karena tidak dipungut biaya tentunya.”
                  </p>
                  <p class="font-semibold text-lg pt-8">Mahardika</p>
                  <div class="rounded-full pt-3">
                    <img
                      alt=""
                      class="max-h-screen"
                      src="https://camp.pijarmahir.id/static/logo/Telkom Indonesia.png"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 md:hidden">
              <div class="col-span-12">
                <div class="relative">
                  <div class="swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                    <div
                      class="swiper-wrapper"
                      style={{ transitionduration: "500ms" }}
                    >
                      <div
                        class="swiper-slide swiper-slide-duplicate"
                        data-swiper-slide-index="2"
                      >
                        <div class="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                          <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                            <img
                              alt=""
                              class="rounded-full"
                              src="https://camp.pijarmahir.id/static/images/testimoni-3.png"
                            />
                          </div>
                          <div class="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                            <p class="pt-4">
                              Pijar Camp sangat membatu saya untuk belajar. Baik
                              dari tempatnya yang nyaman &amp; teman-teman yang
                              kompetitif. Dan sangat menarik karena tidak
                              dipungut biaya tentunya.”
                            </p>
                            <p class="font-semibold text-lg pt-6">Mahardika</p>
                            <img
                              alt=""
                              class="pt-1 -mb-2"
                              src="https://camp.pijarmahir.id/static/logo/Telkom Indonesia.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide" data-swiper-slide-index="0">
                        <div class="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                          <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                            <img
                              alt=""
                              class="rounded-full"
                              src="https://camp.pijarmahir.id/static/images/testimoni-1.png"
                            />
                          </div>
                          <div class="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                            <p class="pt-4">
                              “Pijar Camp membantu saya belajar programming dari
                              0 dengan penyampaian materi sesuai kebutuhan
                              industri serta lingkungan belajar yang sangat
                              kekeluargaan”
                            </p>
                            <p class="font-semibold text-lg pt-6">
                              Hilmi Khoirullah
                            </p>
                            <img
                              alt=""
                              class="pt-3"
                              src="https://camp.pijarmahir.id/static/logo/Alodokter.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide" data-swiper-slide-index="1">
                        <div class="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                          <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                            <img
                              alt=""
                              class="rounded-full"
                              src="https://camp.pijarmahir.id/static/images/testimoni-2.png"
                            />
                          </div>
                          <div class="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                            <p class="pt-4">
                              “Perjanjian income sharing yang ditawarkan Pijar
                              Camp bisa dibilang menarik &amp; menjadi sesuatu
                              yang baru saat itu, karena bootcamp lain belum
                              menerapkan hal tersebut.”
                            </p>
                            <p class="font-semibold text-lg pt-6">
                              Setiawan Restu Aji
                            </p>
                            <img
                              alt=""
                              class="pt-3"
                              src="https://camp.pijarmahir.id/static/logo/Tokopedia.svg"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide" data-swiper-slide-index="2">
                        <div class="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                          <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                            <img
                              alt=""
                              class="rounded-full"
                              src="/static/images/testimoni-3.png"
                            />
                          </div>
                          <div class="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                            <p class="pt-4">
                              Pijar Camp sangat membatu saya untuk belajar. Baik
                              dari tempatnya yang nyaman &amp; teman-teman yang
                              kompetitif. Dan sangat menarik karena tidak
                              dipungut biaya tentunya.”
                            </p>
                            <p class="font-semibold text-lg pt-6">Mahardika</p>
                            <img
                              alt=""
                              class="pt-1 -mb-2"
                              src="https://camp.pijarmahir.id/static/logo/Telkom Indonesia.png"
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        class="swiper-slide swiper-slide-duplicate"
                        data-swiper-slide-index="0"
                      >
                        <div class="px-3 rounded-2xl col-span-4 text-center flex flex-col items-center">
                          <div class="z-2 bg-white p-1 -mb-10 rounded-full shadow-2xl">
                            <img
                              alt=""
                              class="rounded-full"
                              src="https://camp.pijarmahir.id/static/images/testimoni-1.png"
                            />
                          </div>
                          <div class="mt-2 bg-white rounded-xl p-7 flex flex-col items-center pb-24">
                            <p class="pt-4">
                              “Pijar Camp membantu saya belajar programming dari
                              0 dengan penyampaian materi sesuai kebutuhan
                              industri serta lingkungan belajar yang sangat
                              kekeluargaan”
                            </p>
                            <p class="font-semibold text-lg pt-6">
                              Hilmi Khoirullah
                            </p>
                            <img
                              alt=""
                              class="pt-3"
                              src="https://camp.pijarmahir.id/static/logo/Alodokter.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="w-full flex items-center justify-around px-4 absolute bottom-10 z-2"
                      slot="container-end"
                    >
                      <button
                        aria-label="prev"
                        class="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center flex-wrap z-2"
                        style={{ top: "calc(50% - 36px)" }}
                        type="button"
                      >
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 20 20"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.2676 15.793C11.9677 16.0787 11.493 16.0672 11.2073 15.7672L6.20597 10.5168C5.93004 10.2271 5.93004 9.77187 6.20597 9.4822L11.2073 4.23173C11.493 3.93181 11.9677 3.92028 12.2676 4.20597C12.5676 4.49166 12.5791 4.96639 12.2934 5.26631L7.78483 9.99949L12.2934 14.7327C12.5791 15.0326 12.5676 15.5073 12.2676 15.793Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </button>
                      <div class="justify-center flex">
                        <div class="pagination_el relative swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                      </div>
                      <button
                        aria-label="next"
                        class="flex cursor-pointer rounded-full bg-blue-700 w-10 h-10 justify-center items-center z-2"
                        style={{ top: "calc(50% - 36px)" }}
                        type="button"
                      >
                        <svg
                          fill="none"
                          height="24"
                          viewBox="0 0 20 20"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z"
                            fill="#FFFFFF"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-center flex md:flex-row flex-col px-5 lg:px-0">
          <div class="grid grid-cols-12 md:py-28 py-4 lg:max-w-screen-lg text-left">
            <div class="md:col-span-7 col-span-12 my-4 md:my-0">
              <div class="flex">
                <p class="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs hidden md:grid">
                  KISAH SUKSES
                </p>
                <p class="bg-blue-200 rounded-7xl px-4 py-2 text-blue-700 font-bold text-xs md:hidden grid">
                  PENCAPAIAN PIJAR CAMP
                </p>
              </div>
              <p class="text-3.5xl font-bold mt-4 max-w-lg pr-4">
                Bekerjasama dengan perusahaan terbaik di Indonesia
              </p>
              <p class="mt-4 pr-5 md:pr-28 text-black-700 text-lg md:pb-0 pb-10">
                Tidak hanya belajar, kamu juga berkesempatan untuk membangun
                karir di perusahaan impian.
              </p>
              <img
                alt=""
                class="flex md:hidden"
                src="https://camp.pijarmahir.id/static/images/company.png"
              />
              <div class="grid md:grid-flow-row grid-cols-12 md:mt-16 mt-0">
                <div class="w-1 h-12 bg-orange-900 rounded-lg"></div>
                <div class="md:col-span-5 col-span-11 md:-ml-5 -ml-3">
                  <p class="text-4.5xl font-bold text-orange-900">270+</p>
                  <p class="mt-3 text-2xl font-semibold">Perusahaan Rekanan</p>
                  <p class="mt-2 text-lg text-black-700 pr-8 pb-9">
                    Kamu berkesempatan <br class="hidden md:grid" />
                    bekerja di perusahaan terbaik di Indonesia
                  </p>
                </div>
                <div class="w-1 h-12 bg-orange-900 rounded-full"></div>
                <div class="md:col-span-5 col-span-11 md:-ml-5 -ml-3">
                  <p class="text-4.5xl font-bold text-orange-900">760+</p>
                  <p class="mt-3 text-2xl font-semibold">Lulusan Terbaik</p>
                  <p class="mt-2 text-lg text-black-700 pr-8">
                    Kamu akan menjadi programmer dengan kemampuan yang mumpuni
                  </p>
                </div>
              </div>
            </div>
            <div class="col-span-5 hidden md:grid">
              <img
                alt=""
                class="absolute w-5/12 max-w-xl -ml-12"
                src="https://camp.pijarmahir.id/static/images/company.png"
              />
            </div>
          </div>
        </div>
        <div class="justify-center flex px-5 lg:px-0 pt-20">
          <div class="lg:max-w-screen-lg w-full grid grid-cols-12 items-center rounded-3xl bg-blue-darkslate">
            <div class="md:col-span-7 col-span-12 md:pl-20 pl-7 md:pr-40 pr-7">
              <img
                alt=""
                class="mb-4 md:pt-0 pt-5"
                src="https://camp.pijarmahir.id/static/logo/PIJAR_CAMP_WHITE.svg"
              />
              <p class="relative md:text-4xl text-2xl font-semibold mb-4 text-white max-w-xl w-64 md:w-auto">
                Mulai Karirmu <br />
                Bersama&nbsp;
                <span class="text-orange-900">Pijar Camp</span>
                <img
                  alt=""
                  class="absolute md:right-16 md:w-auto right-8 w-29 hidden md:flex"
                  src="https://camp.pijarmahir.id/static/images/VectorWhite.png"
                />
              </p>
              <a href="https://pijarmahir.id/auth/login?to=https%3A%2F%2Fcamp.pijarmahir.id%2F">
                <button
                  class="px-4 my-8 bg-white flex items-center justify-center rounded-lg h-10 md:h-12 border hover:bg-blue-200 text-primary"
                  type="button"
                >
                  Daftar Sekarang
                </button>
              </a>
            </div>
            <div class="md:col-span-5 col-span-12 md:pt-12 md:pr-12 flex justify-end">
              <img
                alt=""
                class="h-32 absolute"
                src="https://camp.pijarmahir.id/static/images/Titik-titik.png"
              />
              <img
                alt=""
                class="md:h-72 h-auto z-2 pr-6"
                src="https://camp.pijarmahir.id/static/images/CTA_Banner.png"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contents;
