arr[i] - arr ichidagi obj larni ko'rsatadi
arr[i].test[j] - arr ichidagi obj ichidagi test ni ichidagi arr larni ko'rsatadi

if funksiyasi sharti - indexOf takrorlanmaydigan elementni qo'shadi 9element indexini qaytaradi

=== -1 esa element yo'qligini bildiradi

umumiy if sahrti: if (fl.indexOf(arr[i].test[j]) === -1) {
            fl.push(...arr[i].test[j])
        }

agar element bo'lsa fl nomli bo'sh arr ga qo'shiladi agar bo'lmasa keyingi arr dan olib qo'shadi

const func = [...new Set(fl)].sort(); esa: Set(fl) ichidagi elementlarni boshqa arr ga o'tkazadi

.sort esa yig'ilgan arr ichidagi elementlarni alfabit yoki raqamlar o'sish tartibida saralaydi

console.log(func); saralangan arr ni console ga chiqaradi.
