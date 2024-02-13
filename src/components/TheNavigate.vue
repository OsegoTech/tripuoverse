<template>
  <div>
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <RouterLink
          to="/"
          class="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <!-- <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-8"
            alt="Flowbite Logo"
          /> -->
          <span
            class="self-center font-semibold whitespace-nowrap dark:text-white text-blue-700 font-mono text-2xl"
            >TripuoVerse</span
          >
        </RouterLink>

        <div
          class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse"
        >
          <button
            v-if="authorized"
            type="button"
            class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            id="user-menu-button"
            aria-expanded="false"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span class="sr-only">Open user menu</span>
            <img
              class="w-8 h-8 rounded-full"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQUFBgVFRUZGRgaHBobGRsbGxsbGxodGhobGxsYGx0bIS0kHR8qIRoaJTclKi8xNDQ0ISM6PzozPi0zNDEBCwsLEA8QHxISHTUrIyo+MzM0PDUzMzMzMzUzPDMzMzMxMzMzMzMzMzM1NTMzMzMzMzMzMzMzMzMzMzMzMzMzM//AABEIAOIA3wMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQGAgMHAQj/xABAEAACAQIEAwUFBgQFAwUAAAABAhEAAwQSITEFQWEGIlFxgQcTMpGhFEJSscHwI2LR4RVygpLxFjNDU4OipLL/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQMEAgX/xAAkEQACAgICAgICAwAAAAAAAAAAAQIRAyESMSJBE2EEUUJxgf/aAAwDAQACEQMRAD8A7NRRRQBRRRQBRRRQBRXlI+McTywqtlDSA3NjHwoN2PPQH5TQEriXFFtghRmeDlXYSI3bYbiuV9re0/ElbMtohEksDm7w1AYqpEIu+kzEs0d2ofam7bOce8Nz4Q4uZCCoJ+FtFUZoMiASAYJ0rn+JeXa4dA2gyknbKOZMmCDqeflQFu4B7QsVbuH7QQ4fYwEZZO65QAR59Yqw2/aLetyLbo/f/wDMxkA6aBRmjnsfU6VzJ8PKSFljPkVnXL15QfTpKS6Ht5XGYjYzqYO48D1HTfWlEWdf4R7T0uqPeWoOslCxUwdMoZQZP4TvrExVv4R2jw2K0tXAW/Dz6x41802bxtPoZDQROxM7H8j4AmKs+Av5AuItlpUBmUnUhZZkeYIYKzZTP4v5aCz6IopJ2f42uJQa96J238ROxIkfMU7oSFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFFFFAFRsdiPdW3uETkVmgbnKpMfSpNar1oMrKdmBB8iINAc4sdv3JK4i2uUyQbciCNlcMTI6j5GqF227Z3blx0t28isuUuw79xJPwnYW52A00k6zUziqtaLofiRmQ+akifWKrIxkytxQ6MdVP3T+JTurdR61VilKTpl/5EYRpxFFq+SSSSxbQky0yQ3M+IBr3EOYGmnp++VSMRgPd6q2YH4Tsen7FaEta95vMb1c01pmZST2jKw7n0/Lb+1TFwrxMHmQa3YKxmYBRrt/yaslnDd2JU+IO/oashjcinJlUSk3sO2UgjT8orPC411LAkw5JPmYH1iKul7hgcfdA8o/Leq7juCOhBA0Jlef75UliaJhmi+yx9h+0j20KFoe2ZUHa4DJVehBJE9ecmu7YPEC5bVxswB+dfNXDOEXScwUnbSDrA/tX0H2WzDDIjAgqAIIgwdRp8x6VW00WqSY6oooqDoKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKKKKAKgcXxYtWXufhUkef3R84qfVB9rnEGtYMBTGdmBP/tuRHWYoDitrjT3ncOSS7MynzMwa1Yu2YGnP50ntkqQw3EEeYp/YxCXhlnKx5Hl5VKj+jmUq7I9y7mtnp9DzilyOSQB+zTbH4QW7bwxJMaH0BNQuF2JOY1Y4ttJnCklFtFh4GQm4nSnF1DIg6E/KlfCsOWYwdPGnGKe3pbU6ruZ51qiqVGHI7lZPSzmK6yDrTh+D5rYYAEevjVcuAouh20Bp/wvi5EW2iIE9OtRK/QhXsywWCMxEGDGm2sx486v/B592hnkVPmP+DVXt4i3lzh41318aZcL4uS4UDuE6H9+OtZ520asdJ9lroqFxLH28Pae9dbKiLmY9PADmSYAA3JArlfF/a27SMPaFte8A9wqzzAynKDlXnpLcvCDSaTrGJxlu2JuOqDXVmCjTfc1B/6jwckfarEiJBuICJ2Bk86+duLcdv4pzcuPLMJZiRlIhQUURoJXYQJE9ag2sTbBADkSNMgCgHSQQQSQfD6UB9VW7isJUgjxBkfStlfNXBu0fuHz2/eWzzKvGvPMNm2+8P6Dr3ZD2gYbGAIzhLw3B7obWJGpg+ImNtdRQF3ooooAooooAooooAooooAooooArmXtqM2MNb/HejoIAJY6agCfnXTa5Z7YbytcwVk7lrz8tlSBv15c6A4ffnWRBJJPLrt61swzwy1I41rdY8mgjWf5f0P9tqhjcHrUoh9DLHzkYkk7AeUz+lM+H4GYEwP3pUC+JtN4rlYfMAj5Gp6XWttp51oj2Zp3xpEzHpcSAoITpUW0zRmKkLzJIEa7k8vWm+H4jnXvgafOtnuSpzWzoRqOXjXWRSq4lUJRTqSEF/iN1SjhiVYSpI5eOvLWpuHx90naSdzWrG2i75nkkAr0APKBpW7gtwiAeWny51xDlWzqfH+JYkxNwWzoYA1+W9QOF9rXtnJAABJLMYyqBJjxOh0qzdn7isQpAIO9UvtHws2rTOLeXNiMgJGpIW4xK+MkDXptTJJronFFPsW8d7W4rFkDEXGZFMqg7irMECFADEaatJ31pEoLT3jl310mB4DnW+7hStwqwII3Gs66wawZQdTtyj961TxNXIilWPLTrtU7Ds1uSAQPHuxI2kmK8sq7fApI2Jg/0rO9hMn/AHCfLRSOus/lUULRuHFGGhZGU6we/H0g/pTDBrauMrABHBkTIBK6aZdV3HQHygofdWYJlugzLP1XX6Vra2mmVHM7GRP0FQdHeewvapyVw2IzFyTlYkSub4EYHUgw2UidoMRA6LXzN2f4gxBRy0wAhYwSpOoDjUHbbXTmcsdv7GdoreJtLaNwviEQe8katlOUvmAytymPEaCYoC1UUUUAUUUUAUUUUAUUUUAVw/2pcTni1hFI/hIimdgz5iZjwDIa7hXy52t4qL/Erl3l74gdVR8q/QUAu44R79wohU7o0A2JnbqTS8bimnaC0ReZj96G+YHLl/Waw4fgS4LcthUxVsiTpWSLrD3beOX/AIqZh3BUZuYGvpUTFWiEYdDW7CDOimdco9Y01+VaqqRle4mZQrqDU7BOx0BIPI8qgq5GhqVaaDpQ4ZOtWzJBHWedRzcAcj1A56VNDErI3pRisM6tnTVuc7VNnKVlt4ViMroR4irb9mR73uW7y966CfuMYWOn/cb0NcswPFrwuLbW2C+kAbeZJ2HWrtjMXc9290CDoDHSMwHnP0ri+R2lxK928wtr338MAQApI5xSLBcLUsJ2G9e8SukuNZ8etbcKzRA3MT0qxRS0RKUmrsbYXhyKucbDYafOleO4SWlzJ89Z+dPsKpYBOQ3qXdtSJjQbDxNS4plSySTs5njVKlhlgc/032rzBYC5cEjuoJzOdFAG5gb+GlWfjWAFwnaefTpUbEswtpZtglQVzR1nf1+tZ54+Nt9GuGXkkl2L8La1hAQNZY/G/meQ27o08Z3rq3sstob7kEBltEZfEM6SfIZQPWuf3MPkXOxhQJY9B+vKnHsmx5+3BmGj5k3+EMsqF6EogPXL41RKNtNmiM2k0d8oooqQFFFFAFFFFAFFFFAQeM4v3OHu3fwW3ceaqSK+T7LKLykaoHETuROk9edfQfta42MPgWtA9+/KKPBRq7HpsPWuA4PDiVzbSD1gcvM7CgGfE8O110yAFrhy6eLEBB5b+g6Va+0WDt4a1btKBIVRPQDc+JJk1F7MYYC4+KuQEt91DyZyNMviAp+tQeI8SNx2L6gnTpV2KPsz5ZejS5Vlynw0NJ8FfKAL4T+ZpjkB+E+lQRa0YHdWb5HUfnVuTtMrhVNE624YQfSt6aaUpW8Ro3zqdZxIO9QpWRKLQyXEsvwqSfCj7Xc/9JZ6mKww4O4Nbb2Ed+Yps5VGdjEXLf8AE92hOmYhxMEjUDpVox/FrdvDHDkFboJNwMI7zEsVPlMelJ+yXDQmNw1tyG94+3RFa4dPDugetOPa9w4pcW5aCgtlZ+6uYtBWS0ZisKNJieprhz49lqx8laKFiGUlfHb61Iwd9UJloXmfHy6V7cwSG1auag3CYHIFDDj0OlR8VgSqzy5Vby9ldLpliwXaG2pChZHl+tN/8St3O7GQnQaiPQ+NULh2FdgrJkJDd9Xyzl6ZgeVOMJw1nuQHEDUgajoCRpPkBXEcycqoTw1G7JuPwh1K+nQVVb73Vcta7xVoaAGjaMwOynx+tXTiN4ImWdYiue8QsRcAPOSf71OZ+Nk/jRblRJ7Q8UN18qwFETGzMBqfIGt3ZHFBLquQxyMj92ZARw2gG+0etKcRbgAdP71t4VcKMTJECZXcQQZH9PDrFZeV7N8sfB0fW1e1FwF0PaRgcwZEYHxBUEH1qVQ5CiiigCiiigCtGIvpbRndgqqCzMxgKAJJJOwrY7AAkmANSfCuEe0vt99snC4YkWA3efneKkwAB/45gjmTGniAo9pXahMbiy9ozatoLakgjP3mZmAOoBJjX8IpH2f4VcxV1UQaGczcgBua1YTBKsXLwkawmoZ2gEDokEEt4RG9dE4Ogw2FJbKt26JIEDIv3UUDYAcupqyEORVkycUV/tBYS0WS1JUBQ5zElis97X8tqSEA6q2YfUTMBh46cqsN1FMySZpXiuGJ8SNDeVaJY3HcTNHKnqREsv0mPnRrmYCe8FPj/LP0FaCSp7+h/EOfhry8OdbmukODP3Su3UMB571U5Xp9lvFra6IpPIivUtmdNKzu6mvLbRr4fnUNbJvReMP2DxxsW8RZyXVdA+QNkcTrEP3W055h5Vo/6d4pt9ju/O2B8y0V3Dg2G91h7Nr8FtE/2qB+la+0F/3eExD/AIbVxvkjGuHkZZ8cTmXZrhpGI4PiTqbpxbH+UNh5tr10Vj60x9pypdvLYbnbRhrG7uJnpA+dTMFYNu3wL8SwpH+fBvm+VVv2wY828XYKkEqgzLPLvmN+YJ5RoPRGXlbJlHxpCrjHD7dkWLdtiyW84mSe8xDMR0zTHpWi+gaFPT8q8xl1fs6XCSVa4SrRoAVHxeBkfOahG8b7D3cqBuSN+grTrpGNpvbN78HtnvD6GKnWcUttMiCD+5M+NLLvvE7p061GN47LUpJEbZNxd/fWWNVPFOWvDmZjzJ2H5U3xeICKQN/Gk1pT7xDzzr85qnO/Fmj8ZcZpkniGEZGXNs2b5qNPzqLaYrdOXQ8jzByyCPUCp/aG6WZRyEkfMCaVWHLXATEkjy8I+VYsNuKbPRzyW17uz6n7K4n3mDw7yrTbTVfhMCNPDbanFUz2WX8/DbQyhcpde7sYcnMB92Z20gyIq51cZgooooAoopX2g4xbweHfEXfhQTA3YnRVHUkgUBzz2udtDaVsDYMO6/xmG6o33F6kbnwPXTkfCcPbOa5dLe7SDCxLsfhQE7TBJMaAHxrTxDGvisQ91yA124WJJ7oLNtP4RIHkKZ45rVx7djDqfd2wRmO91yRnusOUwIHIAeQ6irZxJ0iTwXC+9uG64ARToOQ1kKJ5D6mnuJxAO8nzNR0y2kVQJgeQH9ax+0g/drbjjSPPyScnZn79Pw/WvWRG2lfrWK3EO4qQlpDs0VaVkC7gywiA1I8bgzb1EgDWNxVvfAMdVMnpvUK8h1DjptHzH9KqnBSRbjytMrK3PxD/AFDUfL+lTcAbZuW3ePdrct541OTMM2h1mOXUVjg8EQGVphSQp8QdVP78KzwvCL13EG1Yt+8YoTlkDMoAJIJIAOgE+lZXFxVo2KUZOmfTlm6rqrqQysAVI1BBEgjoRVf9od0pwzFkc7TL/v7p/wD1Ujsjw69hsJbtX3zuo2EEIOVsNAzBdpP9KXe09A3C8QpBM+6AAmSTetgAAakzGlVFxlx7ChG4Ys5QmJRP/rXgB6lQPWuW+2QB+IZQzExZBB+FSwf4fGRlrqvalcv+H90wuLsgqDtNq6g15wzKfSqB7aLSjF4d4Wcqydm7rXCs+I8PI0BTeAcQ96rYUsiggshuZiD3RmTuiRJBbY86MFfuKYAtj1MekfrVVc5WBGhAU+sDX561YfeYVshUZZUFxmPdbmBPgZ9Iq2Db1ZRkiluhneusfiZT/lJMfSoV+6F6D6msXv21+DX9J2nwqEGLmTVrZSogqNcaY/yj9TWsoVup45gB66U4waGIA5b0rxSZLqE8mE/Oq8sfBluKXkjHi4m438oX6yf6UptPEHwqfxe4RcfnLfRSRH0FL1E1lxqkjblds737Hr6izdtDMZK3S2mXM8qygAmCMik7fEDHM9Krhvse4qFxKWndgXV1UaZWPdeCN83cuEHbfmZPcq7RWwoooqSArjvt34nph8OtwffuXEB10yi2T4bvHkfCuwk18kcWx74i9cvvq9x2cyZjMZCjoBAHQCgJHCMLba3eu3PuAKi+LvPePRQJ8yKccEweUF20j8/7UtwtkqqroWPfbwnZV6+PpT5UISJ5fs1oxxpWZc0t0Rr95S2pMVlbKGorb1stJmMDy5c602krZRxbdIYW7SeMVvs2SdhpyJED96VFs5bYDNr46qfp8vnW69irjf8AbGn4isT1AJk79PXeqHmlJ1BFqwRirmxphrhQSXjp3T+evMVufGWm7rup848tiAdwaS2Egy/ePWasmAFtgAUA6gRT48nbZy8uJajEUNgrZBNtg0iY5j03Hl5099l2FnG3LsfDZKjza4NfkprzE8IA7ysRGzDRh16jzqf2Ix9vDYl7V2Fe+FyPsj5C2onYnMJXkY5EGucjajvf2d4+LlrX0dOqje1njAw2BgQbly5byA8jbdbpbyGQepFXmuJe29mOJtg/CtpSv+t7gcj1W2D5is5rOh9pb4u4fCXlaAcTgnUjmLl1F+RVzXP/AG3BjeSIhbSmDAgl7moJOsgNy0y/zCXvDMcL/ALbCQbRsB4Oq+5xFtmYf6VzDpSz21E5rYhu8qjQmDrcnQGBHMkHcRzmH0SjjeLYF2jbb5AD9K1oPP8AYM1txAm423xHyEsfpW7AohuqLk5C6hvGC0E+k1JBnwyO9J0IKt66g+cgH0qZg7yyA2aNZygE6AwIJHOB061jjOF3cLfu4e5o1toP8wOqsOhEMPOssBh2fMR93VvGCd6sgmV5HEbYVnIMEKNY070cvWKWcQw5+Ik+ZpnabKNND417ew+fbXTU/oKvcU9GZTp2VXF3GdiT6etarRj9+G9MsbhiCdIpeUKkT47Hf96VmlDjo1xny2WjsZjDaxdtwe8jjlofh7vk0MJ8SD419NKZE18mWLpRg6+APnlMgHzAI/1CvpHsNxUYnBWnHIBTPQCOZ5EDzB22rk6LJRRRQFN9qHH3wWAZ7RK3LjLaRhupYFmYdQqtB5EivmzLXUfbZ2jNy+MEoGSyVdzGpuMsgT+EI49WPhXLlkkedAW3gNgFAW3+tT8W+UHYgD9f+Kg8OTKs9K1Xr5J3rYqX+GBpykbbLhydAANST+nX+1ZfawgGXfZRHPXxJ3mfCtDXsqkqIjckAnw01jX13qJZJY5m3/IeFVW8svo0UscddjLIXbMwk8o2HgPTxqamKbaoNjEEdakLiUO4rXGKiqRim3J2xph7wfQrU+1CjQny5Ulw+PGwUmp9nFPyU1JW1RZsEMwFY8R4PbuoUZWjcFT3lYbOs7Ef1BkEioeDxT8h9Ke4XEZh4GqZpoux0zRw7tTdwSC3iQ11ACFuABXMA5VYEgSdANfXZaYdquC2eMYRXtMPeKM1p+jQSh8VaBvzA2qFxKyGUq6BlIgg8xSvsdimwly/nZ2tWka60kQltQSxC7uzE/7l5c8s4VtdGzHkvxfZE9ntm7/h/FMDcXK6JcGVhorPaYb+EgH686je2XFg4myJge6tuIM5s1y5uOUAeoZvDSzdnu3+CxrFXtCzcuj3ZJhswghQ7ACAcxidOU61zv2k4w3jg7p+JsHYZ4/F/EJBB8CTB6mqy4oRbc85n8zVh7LcJGK96n3gqlDEw5aQY5jSCOtIFSSB4mPrv9abcFxjWwwtmHYfEJDEbFJ/DzIXVjA2mjYLF2qxRuNbN1VXEIq27gW4LmZUUgMSogGQREkjnSLAuVZo5gg+tYYWWLkaqiAseU5kEjyBA6etMsBw8vqOZn0/Sr8adIz5Wk2bcLaVh4kVIuHLH0FbcMi2ycozH5gU3wttrZTEXgLdkQSZEuCCVKKAW3HOJMaVdKaj/ZRCDk/oT4XgjX8xUoHtzmVirktyARTEQRqWiTtVcx/DXDsLh74MNP72q2YXFm4GvWhkCP3VEjuT8DGde7JJ8dda2Y/Co7IWMll+LUkhSQDudQpUHrVEU3kqXT6NDklC4+uyjWAYK/eGqabwQY+mnWPCuk+xrjXu77YUke7ujOknZoJyjlqAwjQyDoeVb4hwAge8tksBrttWvAMUU3bREowd0aZRlzFbinWUnRjAIDPG8iMkOL+jrHkUkfS1FK+z/FUxVhLyGcw72kQw0ZSDsQaaVWWnzX7WLQTiuIhgc3u2gGYm2gyt4GQTHgRVQt/EKm8ca42KvtcnObtzPP4s7Zh86i4cd4VK7IfRacBcOTXyrQRBJgb6TygzMUWDFutWIuACdSdAOvlyFWZJekUYo7cjRiHlomY1O2/hp+lS7SBhO3L1qPZsCN9a8hl1/wCKvxx4oryS5MmC01bBaNarOJkawIHlP9TrQ10nnVqZU0ybZtMNjU6y7r1pXYYg71LTFFd67KpIb4bF3F3FWLhONzEBufSqrhsWGpvg8RlIquatCDplhxjsNh8qrfGLmpEZTdtX7B8P4lslCdOTqPmasF/GqVBnWKrfajFRh2cKSVZGjoGXMP8AbmqlxuLL4yqaZy7hzw6klgJBJXcQdSAdzE+sVdva1atpjES0FFsYa0Uy/DlzXIKxplObyqmX7HurrpJhWMEeHI/IirrxrhhxXDbePNwBbNm1hVQaFnTEOsuIgAW3U6GZnbnk9noeij4NJuW137/z73kfyNN+L4pIVAsFM4WIAUOZIAVVBkHfKKgcOwzHNcGhTUCCdmnN4ZQRHodKlWcJmUu5zMxyoOZj43MeijxOY/d1lRuSOZSSix3hmtphhYQKXuQzud8oaUH8uY94x93INZNWzgPZ9blsSGFgHuL8LXmG9x+YTcKv6yTA4H2V7ua8ciLDXd82w93ZH82stGslRvU/iGJyXEUsUdtEshoZQASDcIMjQA5V12GtarSRkptnnacG2r28NaDC2AHbKpUMcpyDnKqZJAO42g0s7SAthzLEqoQmT4qqp0+LP8vKLXhrXu191A/iWy5IAABYhdI0GrT6nfeoWKwa3cHfH3y0KOlsggD1zfOqIXKdyNEqjDRUOzwMMrfCRAHlqfmMw9aY4TBk9zPBRiUMSAefmDGopPh8SVAy6REzyI50wtYmWBGgMaeFbJQT0YubWy8cJwlu6velTsy6aHw21HgfKoPabsQQv2rBkrftd8qDGcDU5CNQ2nrHpWGAxmWCDVx4XxcaBt+R/Ss80y/E4v6ZW/ZpxcsWJGRMQzEWwZVLizqoAm2HRZIYmWRiInXpdcb7RoOG49btvKtrEMHUkDIl1CCQc2iqZ1IgwTBEV2FDIBHPwrOtaNfas+Y+15L4/FtAH8e6IAj4HZJ8zlk9SaWYfD94edWvtiLdzHYl7aZVNxh5svdd/wDUwLetKMPh++vnXS7OX0SPddwDTTX9ajhM1wtqQNB/WmeJtwMvNvp1ramBgaVZBcpciqfjGhd9ln4aHtMvdZQdP7zTJLEeIMadZj6RXr2c3KDWgz0KvsvMVkmHI60yS140W8O1LFEVLJJ8BUpbK166RpQqeNdciHA32MgPKmVgoaW27QqfatiNqWcOAxtIp2NeXMNmUqwzIQQw/lIgj5Vow9snYVMt5gRPqKgijmnGeHm1dymdBkJP3soADeqFPWasfBl97wy/hi+VRibDk/hRlcsR4mLR0jfxmpnbHAg5bg6T0K6fUP8A/ClXBEyS5nTSPPWfQCsbjUqPQjO42a+NgBMiW8iABYiNNlB1nTXeDqTpJq0dhOCKR74oBByJOuQKBmcTu5kAHxzHoa7fBuvMaA8zoCdtTpyNWL/F2t27diwAPuu7c2ffKQdADpO+0ba9ppJs5atosfE+MqGGGw+T3hOpMZU1OZo+8y5STry5nSoGP4LhmtXGLv3UYgqQDJlmcgDvMx8Z0050tZrIiO7mUZmLd7SD3o5kD6L4CMW4sTZVY3GU9YEVEdtMT0mjeOIKRbCqEyoihAZAWbcZTzEofpSs4whiJ0Jb5lmM/I/SopUgqQNFAAPlrHzrN2AcgjUbeX9asgqlsrm+UaRFuYaXLDSaw+ygHU1LuknlXiWp9Kvso4k7h7gCKcWL/WkGHSDpTFTR0yKaJ3ay0MXgLiES9se8TnrbBJA6lcw9at3s/vXTg0t3kdWtwgZgIuLkVldSPiWGiemutVHAt3o5EQfWui9n7qthbLLt7tANuSheWnLlWTLGma8M200zl3a7s+LWLeNVuE3F6Z2JKnyIb0ik1rhveGldC41gme+7Nvm+gAA+kVDTh0Haqy0qycNLEn8NSE4fGv7+VWezgN9Ky/w6rYypFco2yqNgBQOHxrVqPDq9Xh/SuuZzwKqcBOoGtbsPgelWMYCDtXowUcqcyHjK03DAeVB4TG9WdcNGgGteNgCfi6d0dOc+tPkHBlZTh4MwJyiT++dYm3A57Tseun78asi8LM6CJ9K2JgGXTMwjkv8AWYqObJ+NFZR2X4ZI6kDl06zU24txVDsuWCCEYyzjnoBK+Zpz9lcMSJnSZIMjwPiIrxsI20CdNRM6HxPlTm/2PjX6E+OwwvWWgbMYHMfd18D3qQYbAlVaOcfSdfrV+NiQzFQMx1AESY+LSl/+GxyriTt2dwjSorScLz5QB3BrrzYxmJA31EDXYD18PDiB5TEee4q428H3YjX961keHDTTTWuVKjpxspv+HyBM66/P/ipFvhwAiKtA4eOQ8PzNbRgj4VZB0iuabZVrmHOXLGlL7nDuZ3q6vgulaG4dPKplMiMKKvZskiCP7179j8BpVnHDelZLgR4UU37JcF6K9YwBPSpa4EU7XCRyrL7L0rr5Ct42xVhcKAwIFXTsjaZMJaVwQwDSGBBHebkdaTJhSNcv5VbcPeDqDtVeSVluKDjZAxWHzuSfL5aVq+xU3KV5kqstFa4Sj7JTTJRkqbIoV/ZKPslNMlGSlihX9krz7J0prkoyUFCr7JR9jprkoyUArXB1n9jHhTHJXuWliheuCXwo+xCmAWvctLFCm5hZrE4Om5SvMlAK0wsV6cLNM8lGSoAs+y1l9mpjkoyVNihYcL0oOF6UzyUZKWKFf2QeFYnB02yUZKChUMHXpwtNMlGSoJFww3T9x/apmDtlQa3ZayUUBlRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQBRRRQH/9k="
              alt="user photo"
            />
          </button>
          <!-- Dropdown menu -->
          <div
            class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
            id="user-dropdown"
          >
            <div class="px-4 py-3">
              <span class="block text-sm text-gray-900 dark:text-white">{{
                name
              }}</span>
              <span
                class="block text-sm text-gray-500 truncate dark:text-gray-400"
                >{{ email }}</span
              >
            </div>
            <ul class="py-2" aria-labelledby="user-menu-button">
              <li>
                <RouterLink
                  to="/sellerview"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Dashboard</RouterLink
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Settings</a
                >
              </li>
              <li>
                <a
                  href="#"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Earnings</a
                >
              </li>
              <li>
                <RouterLink
                  to="/login"
                  @click="logout"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >Sign out</RouterLink
                >
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle="navbar-user"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-user"
        >
          <ul
            class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink
                to="/"
                class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/products"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Products</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/services"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Services</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/about"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/contact"
                class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Contact</RouterLink
              >
            </li>
            <li v-if="!authorized">
              <RouterLink
                to="/login"
                class="block bg-blue-600 p-1 text-white rounded hover:bg-blue-600 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Login</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import store from "../store/index.js";
import { initFlowbite } from "flowbite";
import { computed, onMounted } from "vue";
import { ref } from "vue";
import { RouterLink } from "vue-router";

onMounted(() => {
  initFlowbite();
});

// get the isloggedin getter from store
const user = store.getters.currentUser;
// const user = computed(() => store.getters.currentUser);
const authorized = store.getters.isLoggedIn;
console.log(authorized);
console.log(user);
const email = ref(user.email);

console.log(email);
const name = ref(user.firstName);
console.log(name);

const logout = () => {
  store.dispatch("logout");
};
</script>

<style lang="scss" scoped></style>
