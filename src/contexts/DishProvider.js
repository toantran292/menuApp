import { createContext, useState } from "react";

const DishContext = createContext({});

export const DishProvider = ({ children }) => {
  const [dish, setDish] = useState([
    {
      id: "1",
      image:
        "https://cdn.tgdd.vn/2021/05/CookRecipe/GalleryStep/thanh-pham-1052.jpg",
      nguyenlieu: [
        "Đậu hũ chiên 3 miếng.",
        "Cà chua 2 trái.",
        "Dầu ăn 2 muỗng canh.",
        "Hạt nêm chay 2 muỗng cà phê.",
        "Bột ngọt 2 muỗng cà phê.",
        "Muối 1 muỗng cà phê",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu.",
        "Mua đậu hũ chiên sẵn về cắt thành khối hình vuông nhỏ vừa ăn.",
        "Cà chua rửa sạch, bỏ cuống rồi cắt hình múi cau.",
        "Làm đậu hũ sốt cà chua.",
        "Bắc chảo lên bếp với 2 muỗng canh dầu ăn đun với lửa lớn.",
        "Khi dầu nóng thì cho cà chua vào xào khoảng 5 phút để mềm và tan thành hỗn hợp sền sệt.",
        "Sau đó bạn hạ bếp xuống còn lửa nhỏ rồi cho đậu hũ chiên vào đảo đều.",
        "Nêm vào 1 muỗng cà phê muối, 1/2 muỗng cà phê bột … đảo đều khoảng 3 phút cho gia vị thấm vào đậu hũ.",
        "Nêm nếm gia vị lại cho vừa ăn rồi tắt bếp.",
        "Cho đậu hũ sốt cà chua ra dĩa là hoàn thành rồi.",
      ],
      ten: "Đậu hũ sốt cà",
      categoryFood: 1,
    },
    {
      id: "2",
      image:
        "https://cdn.tgdd.vn/2021/04/CookRecipe/GalleryStep/thanh-pham-1347.jpg",
      nguyenlieu: [
        "Rau muống 500 gr.",
        "Tỏi 2 củ.",
        "Dầu hào 1 muỗng canh.",
        "Dầu ăn 2 muỗng canh.",
        "Gia vị thông dụng 1 ít (đường/ muối/ hạt nêm/ bột ngọt).",
      ],
      cachchebien: [
        "Rau muống nhặt bỏ phần gốc và những lá hư rồi ngắt thành từng khúc vừa ăn.",
        "Sau đó, đem rau đi rửa với nước muối pha loãng rồi rửa lại với nước sạch một lần nữa và để ráo.",
        "Tỏi bóc vỏ rồi đập dập.",
        "Làm rau muống xào tỏi.",
        "Bắc chảo lên bếp, cho vào chảo 2 muỗng canh dầu ăn.",
        "Đợi dầu ăn nóng, cho tỏi vào phi thơm.",
        "Kế tiếp, cho hết rau muống vào xào đều tay trên l…ọc vào và tiếp tục xào khoảng 5 phút cho rau chín.",
        "Sau đó nêm vào chảo 1 muỗng canh hạt nêm, 1 muỗng …ầu hào rồi xào đều tay đến khi nào gia vị tan hết.",
        "Bạn có thể nêm nếm lại gia vị sao cho phù hợp với khẩu vị rồi tắt bếp và cho ra dĩa.",
      ],
      ten: "Rau muống xào tỏi",
      categoryFood: 2,
    },
    {
      id: "3",
      image: "https://cdn.tgdd.vn/2020/12/CookProduct/1200-1200x676-32.jpg",
      nguyenlieu: [
        "Thịt ba chỉ rút xương 1.",
        "2 kg(ba rọi).",
        "Trứng cút 40 quả.",
        "Đường tán 50 gr.",
        "Ớt 1 quả.",
        "Hành tím 1 củ.",
        "Tỏi 6 tép.",
        "Chanh vắt lấy nước cốt 1/2 trái.",
        "Nước mắm 3 muỗng cà phê.",
        "Nước màu dừa 2 muỗng canh.",
        "Gia vị thông dụng 1 ít (đường/ muối/ hạt nêm)).",
      ],
      cachchebien: [
        "Để thịt heo được sạch thì khi sơ chế bạn ngâm thịt…- 10 phút sau đó rửa lại với nước sạch rồi để ráo.",
        "Tiếp theo, cho thịt heo vào tủ lạnh ngăn đá khoản… heo được đông nhẹ, khi cắt sẽ đẹp và dễ dàng hơn.",
        "Lấy thịt heo ra khỏi tủ lạnh, dùng dao cắt thịt heo thành khúc với độ dày khoảng 1 - 2 lóng tay.",
        "Cho phần thịt heo chần sơ qua nước sôi khoảng 3 -…n lại rồi vớt ra rửa lại với nước sạch rồi để ráo.",
        "Luộc trứng cút.",
        "Trứng cút khi mua về bạn đem rửa sơ với nước sạch,…hút thì vớt ra để nguội và tiến hành bóc vỏ trứng.",
        "Sau khi đã bóc vỏ trứng cút thì trộn với 2 muỗng canh nước màu dừa và để yên để trứng thấm gia vị.",
        "Xào thịt.",
        "Bắc chảo lên bếp, cho vào chảo 1 muỗng canh đường …hì tiến hành cho phần thịt heo đã thấm gia vị vào.",
        "Đảo đều liên tục cho thịt săn lại cho đến khi bề m…uyển sang vàng sậm và dậy mùi thơm thì cho thêm 1.",
        "5 lít nước sôi vào chảo, đun hỗn hợp trong khoảng …òn dính vào chảo thì cho hỗn hợp vào nồi cơm điện.",
        "Kho thịt với nồi cơm điện.",
        "Cho hỗn hợp thịt heo đã xào vào nồi cùng với phần trứng cút đã luộc và tiến hành ninh trong 30 phút.",
        "Sau 30 phút bạn vớt phần thịt heo và trứng cút ra,… bỏ đi phần ớt, tỏi, hành tím còn trong nước dùng.",
        "Cho thịt heo và trứng cút vào nồi cơm điện cùng vớ…bỏ cặn trước đó, tiến hành ninh thịt thêm 30 phút.",
        "Nêm nếm gia vị cho vừa miệng và thưởng thức.",
      ],
      ten: "Thịt kho trứng cút",
      categoryFood: 1,
    },
    {
      id: "4",
      image:
        "https://cdn.tgdd.vn/2021/05/CookRecipe/Avatar/canh-bi-dao-chay-nam-thumbnail-1.jpg",
      nguyenlieu: [
        "Bí đao 500 gr.",
        "Đậu hũ 100 gr.",
        "Sườn non 200 gr.",
        "Nấm bào ngư 100 gr.",
        "Nấm mèo 100 gr.",
        "Nấm rơm 200 gr.",
        "Bột mì 20 gr.",
        "Hạt nêm/ tiêu 1 ít.",
        "Ớt bột 1/2 muỗng cà phê.",
      ],
      cachchebien: [
        "Sơ chế các nguyên liệu.",
        "Bí đao cắt bỏ vỏ, rửa sạch, cắt thành khúc dày khoảng 2 lóng tay.",
        "Sau đó, khoét bỏ phần ruột đi.",
        "Bạn ngâm nấm mèo trong nước lạnh khoảng 10 phút, sau đó, vớt ra rửa sạch rồi băm nhuyễn.",
        "Để khử mùi hôi của nấm rơm và nấm bào ngư thì bạn …i loãng khoảng 5 - 10 phút, rồi vớt ra để ráo nhé.",
        "Sườn chay ngâm trong nước khoảng 5 phút rồi vớt ra…ô và để ráo rồi nhẹ nhàng xé thành những sợi mỏng.",
        "Sau khi xé xong thì cắt nhỏ.",
        "Tương tự, nấm bào ngư bạn cùng xé và cắt nhỏ.",
        "Trộn nhân nấm.",
        "Bạn cho sườn chay, nấm bào ngư cắt nhỏ và đậu hũ vào cối rồi giã nhuyễn.",
        "Sau khi hỗn hợp này đã nhuyễn thì bạn cho toàn bộ…ễn, 2 muỗng cà phê hạt nêm và 1 muỗng cà phê tiêu.",
        "Trộn thật đều hỗn hợp này.",
        "Nhồi bí.",
        "Bạn dùng muỗng múc nhân nhồi vào phần hạt đã được … lượt nhồi hết phần nhân vào tất cả khoanh bí đao.",
        "Sau khi đã hoàn thành, bạn dặm một lớp bột mì lên …ấm nhồi để tăng độ kết dính của phần nhân này nhé.",
        "Xào nấm.",
        "Bắc nồi lên bếp, cho vào 2 muỗng dầu ăn, đợi dầu …g, bạn cho nấm rơm vào và xào trong khoảng 3 phút.",
        "Nấu canh.",
        "Sau 3 phút, bạn đổ vào khoảng 500ml nước và cho vào 1 muỗng cà phê muối, 1 muỗng cà phê hạt nêm.",
        "Nấu khoảng 5 phút thì nước sôi, bạn nhẹ nhàng thả tất cả bí đao nhồi vào.",
        "Sau khoảng 5 phút, bí đao và nấm đã chín, bạn nêm nếm lại cho vừa khẩu vị và tắt bếp.",
      ],
      ten: "Canh bí đao chay nấm",
      categoryFood: 3,
    },
    {
      id: "5",
      image:
        "https://cdn.tgdd.vn/2021/06/content/2-cach-lam-mon-ca-huong-thom-ngon-hap-dan-cho-bua-21-760x367-760x367.jpg",
      nguyenlieu: [
        "Cá hường 3 con (350gr).",
        "Thịt ba chỉ 200 gr (hoặc tó…g 1 ít (hạt nêm/ muối/ bột ngọt/ đường/ tiêu xay).",
        "Hành lá 1 nhánh.",
        "Nghệ tươi 1 nhánh.",
        "Ớt 1 trái.",
        "Tỏi 3 tép.",
        "Hành tím 1 củ.",
        "Dầu ăn 2 muỗng canh.",
        "Nước mắm 2 muỗng canh.",
        "Gia vị thông dụng 1 ít (hạt nêm/ muối/ bột ngọt/ đường/ tiêu xay).",
      ],
      cachchebien: [
        "Sơ chế cá hường Cá hường bạn làm sạch, loại bỏ phầ…t ra, rửa thật sạch với nước và cho vào rổ để ráo.",
        "Sơ chế các nguyên liệu khác Thịt heo bạn có thể ng…i loãng khoảng 10 phút rồi rửa thật sạch với nước.",
        "Sau khi thịt ráo, bạn cắt thịt thành những khúc vuông vừa ăn.",
        "Hành tím lột bỏ vỏ, rửa sạch rồi cắt lát mỏng.",
        "Tỏi lột bỏ vỏ, rửa rồi băm nhuyễn.",
        "Ớt loại bỏ cuống, rửa sạch, cắt lát xéo.",
        "Nghệ gọt bỏ vỏ, rửa sạch rồi cắt nhỏ.",
        "Hành lá cắt bỏ lá úa vàng, rửa sạch rồi cắt nhỏ.",
        "Để ướp cá, bạn cho vào thau đựng cá tất cả phần tỏ…ờng, 1/2 muỗng cà phê tiêu, 1 muỗng canh nước mắm.",
        "Trộn đều và ướp cá trong 30 phút.",
        "Xào thịt Bắc nồi lên bếp, cho thịt vào, thêm 2 muỗng canh dầu ăn, đảo đều tay để thịt chín đều.",
        "Sau khi xào khoảng 10 phút, thịt săn lại, phần mỡ…gần hết thì cho nghệ và hành tím vào, đảo đều tay.",
        "Kho cá Sau 5 phút, điều chỉnh lửa vừa, nghệ dần ra màu thì bạn lần lượt gắp cá hường cho vào.",
        "Khoảng 1 - 2 phút thì bạn nên trở để cá chín vàng…c sốt dần kẹo lại, nêm thêm 1 muỗng canh nước mắm.",
        "Tiếp tục kho đến khi nước kho thật đặc lại, cá thấm gia vị, nêm nếm lại cho hợp khẩu vị và tắt bếp.",
      ],
      ten: "Cá hường chiên sả ớt",
      categoryFood: 1,
    },
    {
      id: "6",
      image:
        "https://cdn.tgdd.vn/2021/06/CookProduct/Muopxaogiado-1200x676.jpg",
      nguyenlieu: [
        "Mướp hương 1 quả.",
        "Giá đỗ 100 gr.",
        " Hành tím 2 củ.",
        "Ớt 1 trái.",
        "Gia vị thông dụng 1 ít (muối/ hạt nêm/ bột ngọt).",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Mướp hương mua về bạn dùng dao …t bỏ vỏ sau đó đem đi rửa sạch rồi cắt xéo vừa ăn",
        "Giá đỗ bạn ngâm với nước muối pha loãng khoảng 15 phút rồi rửa lại với nước sạch, để ráo",
        "Hành tím lột vỏ, cắt lát",
        "Ớt bỏ cuống, rửa sạch và cắt lát",
        "Xào mướp Bắc chảo lên bếp, cho 1/2 muỗng canh dầu ăn vào",
        "Đợi đến khi dầu nóng thì cho hành tím vào phi thơ…ế đến cho mướp vào xào khoảng 3 phút trên lửa lớn",
        "Tiếp tục cho giá vào, đảo đều thêm 1 - 2 lần nữa …1/2 muỗng cà phê muối và 1 muỗng canh hạt nêm vào",
        "Trộn đều thêm 2 phút nữa, nêm nếm lại gia vị cho vừa ăn rồi tắt bếp",
        "Cuối cùng bạn chỉ cần bày món ăn ra dĩa, trang trí thêm vài lát ớt cho thêm bắt vị là hoàn thành",
      ],
      ten: "Mướp xào giá đỗ",
      categoryFood: 2,
    },
    {
      id: "7",
      image:
        "https://cdn.tgdd.vn/2021/05/CookRecipe/GalleryStep/lam-sot-nuoc-tuong-4.jpg",
      nguyenlieu: [
        "Trứng vịt 4 cái.",
        "Nước tương 8 muỗng canh.",
        "Ớt 1 trái.",
        "Hành lá 1 ít.",
        "Dầu ăn 4 muỗng canh.",
        "Gia vị thông dụng 1 ít(đường/ bột ngọt/ tiêu xay).",
      ],
      cachchebien: [
        "Chiên trứng ốp la Bắc 1 cái chảo lên bếp rồi đun nóng.",
        "Cho vào 4 muỗng canh dầu ăn, chờ dầu sôi thì đập lần lượt 4 quả trứng vịt vào, chiên ốp la.",
        "Sau khi phần lòng trắng trứng ở dưới đã đông lại, dễ dàng lật lên thì bạn cho trứng ra 1 cái dĩa.",
        "Làm sốt nước tương Đầu tiên, bạn rửa sạch hành lá,…ắt khúc vừa ăn, chia đôi phần đầu hành và lá xanh.",
        "Trong chảo chiên trứng vừa nãy còn 1 ít dầu, bạn lại bắc lên bếp đun nóng.",
        "Cho vào phần đầu hành để phi thơm.",
        "Tiếp theo, cho vào 8 muỗng canh nước tương, 2 muỗ…hê bột ngọt, đun sôi trong 2 - 3 phút với lửa nhỏ.",
        "Sau đó, bạn cho trứng ốp la vào lại chảo, mở lên …- 5 phút cho lòng đỏ trứng chín hơi se mặt là đạt.",
        "Cuối cùng, khi trứng đã đạt độ chín tới, bạn rắc …nhỏ 1 trái ớt tươi lên trên nữa là hoàn thành rồi.",
      ],
      ten: "Trứng chiên nước tương",
      categoryFood: 1,
    },
    {
      id: "8",
      image:
        "https://cdn.tgdd.vn/2020/12/CookRecipe/Avatar/canh-rau-ngot-muop-thit-bam-thumbnail.jpg",
      nguyenlieu: [
        "Rau ngót 1 bó .",
        "Thịt bằm 200 gr .",
        "Mướp 1 trái .",
        "Hành lá 2 cây .",
        "Gia vị thông dụng 1 ít (đường/ muối/ bột ngọt/ hạt nêm).",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Rau ngót mua về tuốt lá, rửa sạch rồi vò nhẹ.",
        "Mướp gọt vỏ mang đi rửa sạch rồi cắt đôi theo chi… dọc, sau đó thái khoanh tròn cỡ nửa đốt ngón tay.",
        "Hành lá rửa sạch, cắt khúc cỡ 1 đốt ngón tay.",
        "Nấu canh Bắc nồi lên bếp, cho 1 lít nước vào nồi n…cao đến khi nước sôi lăn tăn thì cho thịt bằm vào.",
        "Tiến hành vớt hết bọt cho đến khi nước trong và b…o đảo đều ở nhiệt độ trung bình trong vòng 2 phút.",
        "Sau đó cho mướp đã sơ chế vào đảo đều cùng rau ngót.",
        "Nêm lần lượt 2 thìa cà phê đường, 3 thìa cà phê h…ôi già thì bỏ hành lá đã cắt khúc vào rồi tắt bếp.",
      ],
      ten: "Canh rau ngót mướp thịt bằm",
      categoryFood: 3,
    },
    {
      id: "9",
      image:
        "https://cdn.tgdd.vn/2021/04/CookRecipe/Avatar/canh-bap-cai-trung-thumbnail-1.jpg",
      nguyenlieu: [
        "Bắp cải 700 gr .",
        "Hành lá 1 nhánh .",
        "Ngò 1 nhánh .",
        "Trứng gà 2 quả .",
        "Dầu ăn 1 muỗng canh .",
        "Mắm 1 muỗng canh .",
        "Gia vị thông dụng 1 ít (muối/ đường/ bột ngọt/ tiêu/ hạt nêm).",
      ],
      cachchebien: [
        "Sơ chế các nguyên liệu Bắp cải cắt làm bốn phần, loại bỏ phần cùi, cắt thành những sợi nhỏ",
        "Sau đó, cho vào một thau nước muối loãng ngâm kho…hút, vớt ra rửa thật sạch với nước lạnh và để ráo",
        "Hành lá, ngò cắt bỏ phần lá úa và gốc rễ, sau đó … đầu hành, dùng dao đập dập, phần lá hành cắt nhỏ",
        "Đập 2 trứng vào chén, khuấy đều để lòng đỏ và lòng trắng trứng hòa tan hoàn toàn vào nhau",
        "Nấu canh Bắc nồi lên bếp, cho vào 1 muỗng canh dầu…ơng thơm thì cho khoảng 300ml nước vào và đun sôi",
        "Nêm vào 1 muỗng cà phê muối, 1 muỗng cà phê bột n…t, 2 muỗng cà phê đường và 1 muỗng cà phê hạt nêm",
        "Sau khoảng 5 phút nước đã sôi, bạn từ từ đổ trứng… khuấy để trứng tan từ từ và không bị vón cục nhé",
        "Tiếp đến, cho toàn bộ bắp cải vào và đảo đều",
        "Nêm thêm 1 muỗng canh nước mắm, đợi canh sôi thêm…m lại cho phù hợp khẩu vị gia đình bạn và tắt bếp",
      ],
      ten: "Canh bắp cải trứng",
      categoryFood: 3,
    },
    {
      id: "10",
      image:
        "https://cdn.tgdd.vn/2022/06/CookDish/cach-lam-mon-thit-lon-xao-dua-thom-ngon-dam-vi-cuc-bat-com-avt-1200x676.jpg",
      nguyenlieu: [
        "Thịt ba chỉ 250 gr .",
        "Dứa 1/2 quả (thơm) .",
        "Hành lá 4 nhánh .",
        "Dầu hào 2 muỗng cà phê .",
        "Hạt nêm/ Tiêu xay 1 ít .",
        "Dầu ăn 5 muỗng canh.",
      ],
      cachchebien: [
        "Thịt lợn mua về bạn chà sát với muối, rửa sạch, để ráo và cắt miếng vừa ăn.",
        "Dứa bạn cũng rửa sạch với nước, để ráo rồi cắt thành nhiều lát có độ dày 1/2 lóng tay.",
        "Hành lá thì bạn cắt rễ, bỏ lá héo, rửa sạch và cắt nhỏ.",
        "Làm thịt lợn xào dứa Bạn làm nóng 5 muỗng canh dầu ăn trên chảo với lửa vừa.",
        "Khi dầu đã nóng, bạn cho thịt lợn vào đảo đều đến khi cháy xém cạnh.",
        "Kế đến, cho thêm vào chảo: phần dứa đã sơ chế, 2 …uỗng cà phê hạt nêm, 1/2 muỗng cà phê tiêu xay.",
        "Đảo đều hỗn hợp thịt 2 phút nữa rồi cho hành lá vào, đảo thêm 15 giây và tắt bếp.",
      ],
      ten: "Thịt lợn xào dứa",
      categoryFood: 2,
    },
    {
      id: "11",
      image:
        "https://cdn.tgdd.vn/2022/08/CookRecipe/GalleryStep/thanh-pham-114.jpg",
      nguyenlieu: [
        "Nấm đùi gà 250 gr .",
        "Hành tây 2 củ (củ nhỏ) .",
        "Hành lá 1 nhánh .",
        "Hạt nêm chay 1 muỗng cà phê .",
        "Dầu hào chay 1 muỗng cà phê .",
        "Dầu ăn 1 ít.",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Đầu tiên, bạn rửa sạch nấm đùi gà rồi cắt thành các miếng nhỏ vừa ăn.",
        "Hành tây thì bạn lột bỏ vỏ, rửa sạch và cắt múi cau.",
        "Với hành lá, bạn cắt nhỏ phần đầu hành, phần lá hành rồi để riêng.",
        "Xào nấm đùi gà với hành tây Bắc chảo lên bếp, cho …à làm nóng, sau đó cho phần đầu hành vào xào thơm.",
        "Tiếp đến, cho thêm hành tây, nấm đùi gà, 1 muỗng cà phê hạt nêm chay, 1 muỗng cà phê dầu hào chay.",
        "Bạn xào trên lửa vừa khoảng 15 phút là nấm chín.",
        "Cuối cùng, bạn cho vào hành lá cắt khúc rồi tắt bếp.",
      ],
      ten: "Nấm đùi gà xào hành tây",
      categoryFood: 2,
    },
    {
      id: "12",
      image:
        "https://cdn.tgdd.vn/2022/10/CookDish/cach-lam-nui-xao-thap-cam-chay-thom-ngon-nhanh-gon-don-gian-avt-1200x676.jpg",
      nguyenlieu: [
        "Nui 50 gr (nui dài hay nui xoăn đều được) .",
        "Nấm đùi gà mini 20 gr .",
        "Ớt chuông 1/2 trái.",
        "Cà rốt 1/2 củ.",
        "Susu 1/4 trái .",
        "Đậu que 1 ít .",
        "Cà chua 1 trái.",
        "Bắp cải 1 ít .",
        "Hành tím 1 ít .",
        "Hành lá 1 ít (cắt nhỏ) .",
        "Dầu hào chay 1 muỗng cà phê .",
        "Hạt nêm chay 1 muỗng cà phê .",
        "Mật ong 1/2 muỗng cà phê .",
        "Nước tương 1 muỗng cà phê .",
        "Dầu ăn 1 ít .",
        "Muối/ tiêu xay 1 ít.",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Đầu tiên, bạn bắc nồi lên bếp luộc nui trong khoảng 5 - 10 phút.",
        "Nui chín, bạn vớt ra để ráo nước.",
        "Cà rốt, su su bạn gọt bỏ, rửa sạch, rồi dùng dao cắt sợi dài khoảng 5cm.",
        "Đậu que bạn ngắt bỏ cuống 2 đầu, tước bỏ xơ 2 bên, rửa sạch rồi cắt đoạn dài khoảng 5cm.",
        "Ớt chuông loại bỏ hết ruột, sau đó rửa sạch và cắt thành miếng nhỏ vừa ăn.",
        "Bắp cải bạn loại bỏ lá héo úa, rồi cắt thành khúc nhỏ vừa ăn.",
        "Sau khi cắt, bạn đem bắp cải ngâm nước muối khoảng 10 phút, sau đó rửa sạch rồi vớt ra để ráo nước.",
        "Nấm đùi gà thì gọt bỏ phần chân nấm, rửa sạch rồi cắt thành sợi dày.",
        "Cà chua bạn cắt múi cau.",
        "Xào rau củ Bạn bắc chảo lên bếp, cho 1 ít dầu ăn vào.",
        "Đợi dầu nóng, bạn cho hành lá cắt nhỏ vào phi thơm, rồi cho tiếp nấm đã sơ chế vào đảo đều.",
        "Tiếp theo, bạn cho bắp cải, đậu que vào xào chung.",
        "Cuối cùng là cho cà rốt, su su và cà chua vào xào với lửa vừa.",
        "Kế đến, bạn nêm vào chảo 1 muỗng cà phê dầu hào c…t ong, 1 muỗng cà phê nước tương và 1 ít tiêu xay.",
        "Lượng gia vị bạn có thể gia giảm theo khẩu vị của mình.",
        "Làm nui xào thập cẩm Sau khoảng 5 - 10 phút xào ra… cho nui và hành tím vào, đảo đều cho thấm gia vị.",
        "Lúc này, bạn có thể nêm nếm gia vị lại cho vừa ăn.",
        "Khi các nguyên liệu chín mềm, bạn có thể thêm 1 ít hành lá cắt nhỏ cho thơm rồi tắt bếp.",
      ],
      ten: "Nui xào thập cẩm chay",
      categoryFood: 2,
    },
    {
      id: "13",
      image:
        "https://cdn.tgdd.vn/2022/07/CookRecipe/GalleryStep/thanh-pham-245.jpg",
      nguyenlieu: [
        "Nấm linh chi nâu 50 gr .",
        "Nấm linh chi trắng 50 gr .",
        "Nấm đông cô tươi 50 gr .",
        "Nấm rơm 50 gr .",
        "Nấm bào ngư 50 gr .",
        "Nấm mèo 10 gr Thơm 1/2 quả .",
        "Ớt chuông xanh 1/2 quả .",
        "Ớt chuông vàng 1/2 quả .",
        "Ớt chuông đỏ 1/2 quả .",
        "Hành tây 1/2 củ .",
        "Giấm gạo 1 muỗng canh .",
        "Tương ớt 2 muỗng canh .",
        "Tương cà 2 muỗng canh .",
        "Tương xí muội 2 muỗng canh .",
        "Gia vị thông dụng 1 ít (Muối/ đường/ hạt nêm chay/ bột ngọt).",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Ớt chuông xanh, ớt chuông vàng,…h, bỏ hạt rồi cắt khúc vừa ăn khoảng 1/2 lóng tay.",
        "Hành tây bạn lột bỏ vỏ, cắt múi cau.",
        "Nấm mèo bạn ngâm nước lạnh khoảng 30 phút rồi rửa sạch, cắt miếng vừa ăn.",
        "Nấm linh chi trắng, nấm linh chi nâu, nấm đông cô…rơm, nấm bào ngư bạn cắt bỏ chân nấm rồi rửa sạch.",
        "Thơm bạn nhờ người bán cắt bỏ mắt, mua về rửa sạch rồi cắt lát vừa ăn.",
        "Pha nước sốt Bạn cho vào chén 4 muỗng canh đường, … tương xí muội, 1 muỗng canh giấm gạo rồi đảo đều.",
        "Xào nấm Bắc chảo lên bếp mở lửa vừa, cho vào chảo …óng bạn cho 1 muỗng canh hành boa rô vào phi thơm.",
        "Khi hành thơm, bạn thêm nấm mèo, nấm rơm, nấm đôn…ớt chuông và phần nước sốt vào xào lửa nhỏ 5 phút.",
        "Sau 5 phút, bạn thêm phần hành tây vào đảo đều, nêm nếm lại cho vừa ăn và tắt bếp.",
      ],
      ten: "Nấm xào chua ngọt chay",
      categoryFood: 2,
    },
    {
      id: "14",
      image:
        "https://cdn.tgdd.vn/2022/07/CookDish/2-cach-lam-mi-xao-hai-san-thom-ngon-hap-dan-doi-vi-cho-bua-an-avt-1200x676.jpg",
      nguyenlieu: [
        "Mì 100 gr (2 vắt) .",
        "Tôm 100 gr .",
        "Mực 200 gr .",
        "Ớt chuông 1 quả .",
        "Cải thìa 100 gr .",
        "Dầu ăn 2 muỗng canh .",
        "Gia vị thông dụng 1 ít (Đường/ hạt nêm/ tiêu xay).",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu 100gr tôm bạn mua về rửa sạch với nước và để ráo.",
        "Sau đó bóc hết vỏ, ngắt bỏ phần đầu tôm và dùng m…ọn rạch sống lưng của tôm để loại bỏ phần chỉ đen.",
        "Rửa sơ lại với nước rồi để ráo và cho tôm vào đĩa.",
        "Với 200gr mực tươi bạn dùng tay rút phần đầu mực …úi mực và rửa sạch lại cả trong lẫn ngoài con mực.",
        "Sau đó, bạn dùng dao thái mực thành những khoanh tròn mỏng có độ rộng khoảng một đốt ngón tay.",
        "Ớt chuông thì bạn bỏ cuống, cắt dọc quả để loại bỏ hạt rồi rửa sạch và thái sợi dài mỏng.",
        "100gr cải thìa, bạn tách riêng từng lá rồi rửa sạch với nước.",
        "Kế đến, bạn bóc bỏ vỏ tỏi và băm nhuyễn.",
        "2 vắt mì thì bạn đem ngâm trong tô nước lạnh khoảng 10 phút rồi vớt ra rổ để ráo.",
        "Ướp tôm với mực Bạn cho tôm và mực đã sơ chế vào c… muỗng cà phê bột ngọt, 1/2 muỗng cà phê tiêu xay.",
        "Bạn trộn đều rồi ướp tôm và mực trong khoảng 15 phút cho ngấm gia vị.",
        "Chần mì Bạn bắc nồi lên bếp và đổ nước vào 1/2 nồi.",
        "Đun đến khi nước sôi thì cho 2 vắt mì vào chần khoảng 30s rồi tắt bếp.",
        "Tiếp đó, bạn vớt mì ra rổ và xả sơ với nước lạnh cho sợi mì dai hơn và để ráo.",
        "Xào mì với hải sản Bạn bắc chảo lên bếp, cho vào 1 muỗng canh dầu ăn và phi thơm tỏi băm.",
        "Tiếp đến cho tôm, mực đã ướp gia vị vào xào ở mức lửa lớn đến khi gần chín thì cho ra đĩa.",
        "Kế đến, bạn tiếp tục cho 1 muỗng canh dầu ăn vào ngay chảo đang nấu.",
        "Khi dầu nóng lên, bạn cho ớt chuông đã sơ chế vào xào.",
        "Kế đến, bạn cho vào 1 ít nước lọc, 1 muỗng canh h… phê đường và xào ở mức lửa vừa phải trong 5 phút.",
        "Khi thấy ớt chuông vừa chín tới thì cho tiếp cải thìa vào chảo, đảo đều tay.",
        "Đợi cải thìa hơi mềm thì đổ tiếp mì vào xào chung cho thấm đều gia vị.",
        "Cuối cùng, bạn cho tôm, mực đã xào vào chảo và ti…m lại gia vị cho phù hợp với khẩu vị của gia đình.",
        "Sau đó bạn tắt bếp là xong.",
      ],
      ten: "Mì xào hải sản",
      categoryFood: 2,
    },
    {
      id: "15",
      image:
        "https://cdn.tgdd.vn/2022/09/CookRecipe/Avatar/thit-heo-quay-gion-bi-cong-thuc-chia-se-tu-nguoi-dung-thumbnail.jpg",
      nguyenlieu: ["Thịt ba chỉ heo 500 gr", "Muối hạt 100 gr"],
      cachchebien: [
        "Sơ chế nguyên liệu Để khử mùi hôi thịt ba chỉ, bạn…i hạt chà xát đều quanh thịt rồi rửa lại với nước",
        "Sau đó, bạn cho 200ml nước vào chảo, bắc chảo lên…và đun với lửa vừa khoảng 3 phút cho nước sôi lên",
        "Tiếp đến, bạn cho thịt đã rửa sạch vào chảo sao c…trong nước, đun sôi khoảng 3 phút cho bì hơi chín",
        "Sau 3 phút, bạn lấy thịt ra, rửa sạch với nước lạnh",
        "Tiếp theo, bạn đổ bỏ phần nước trong chảo, rồi bắc lại chảo lên bếp đun cho nóng",
        "Sau đó úp phần bì thịt xuống đáy chảo, di đi di lại khoảng 3 phút cho bì được khô nước",
        "Làm thịt heo quay giòn bì Để làm thịt heo quay giò…ỉ đã làm khô bì lên sao cho phần bì quay lên trên",
        "Tiếp đó, bạn gấp 4 góc giấy bạc bao quanh miếng t… muối hạt dày khoảng 1cm lên trên phủ kín phần bì",
        "Kế đến, bạn cho thịt vào nồi chiên không dầu, cài đặt nhiệt độ 150 độ C trong vòng 40 phút",
        "Đợi đến khi nồi phát ra tiếng TING TING, bạn lấy miếng thịt ra",
        "Nếu thấy lớp muối trên bề mặt khô đóng thành tảng, phần bì khô hoàn toàn, cứng, màu hơi vàng là đạt",
        "Sau đó, bạn gạt bỏ lớp muối bên trên phần bì đi, …không dầu chiên ở nhiệt độ 180 độ C trong 35 phút",
        "Khi lấy miếng thịt ra thấy bì nổ vàng, giòn là hoàn tất",
      ],
      ten: "Thịt heo quay giòn bì ",
      categoryFood: 1,
    },
    {
      id: "16",
      image:
        "https://cdn.tgdd.vn/2022/04/CookRecipe/GalleryStep/thanh-pham-37.jpg",
      nguyenlieu: [
        "Cơm nguội 3 chén.",
        "Trứng gà 2 quả .",
        "Củ cải/cà rốt 1 củ .",
        "Đậu que 100 gr .",
        "Hành tím 1 củ .",
        "Hành lá 2 cây .",
        "Tỏi 2 tép .",
        "Ớt 1 quả .",
        "Nước mắm 2 muỗng cà phê .",
        "Dầu ăn 4 muỗng canh .",
        "Gia vị thông dụng 1 ít (Đường/hạt nêm/tiêu xay).",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Hành lá mua về bạn cắt rễ, rửa sạch rồi cắt nhỏ",
        "Còn củ cải và cà rốt thì gọt vỏ, rửa sạch rồi cắt hạt lựu",
        "Đậu que rửa sạch cắt hạt lựu Tỏi bạn bóc vỏ, băm …àm 2 phần, 1 phần để riêng còn 1 phần băm cùng ớt",
        "Tiếp đến, bạn đập 2 quả trứng cho vào tô, cho 1/2…à phê hạt nêm đánh đều đến khi hòa quyện vào nhau",
        "Làm nước sốt chiên cơm Bạn cho 2 muỗng cà phê nước…ng cà phê đường, tỏi và ớt băm vào chén, trộn đều",
        "Chiên trứng Bạn bắc chảo lên bếp, cho 2 muỗng canh dầu ăn vào",
        "Đợi khi dầu nóng thì cho trứng vào chiên",
        "Khi trứng vừa bắt đầu chín thì dùng đũa xào tơi t…lên đến khi chín hoàn toàn thì tắt bếp, đổ ra đĩa",
        "Rang cơm Cũng chiếc chảo đó, bạn cho 2 muỗng canh dầu ăn vào",
        "Đợi dầu nóng thì cho hành tím vào phi thơm",
        "Sau đó, cho cà rốt và đậu que vào, đảo đều",
        "Sau khi đậu que và cà rốt đã chín thì cho cơm vào, xào tầm 2 phút",
        "Tiếp đến, đổ hỗn hợp sốt vào, xào đến khi cơm khô…cho phần trứng đã chiên vào, trộn đều rồi tắt bếp",
        "Cuối cùng bạn cho hành lá và tiêu xay lên trên, đảo đều rồi thưởng thức thôi",
      ],
      ten: "Cơm rang cay",
      categoryFood: 1,
    },
    {
      id: "17",
      image:
        "https://cdn.tgdd.vn/2022/01/CookDish/cach-lam-tom-chien-khoai-tay-gion-ngon-chuan-vi-nha-hang-tai-avt-1200x676-2.jpg",
      nguyenlieu: [
        "Ba chỉ bò 100 gr .",
        "Ớt chuông 1 quả .",
        "Nấm kim châm 50 gr .",
        "Dầu ăn 1 muỗng canh .",
        "Gia vị thông dụng 1 ít (hạt nêm/ muối/ tiêu xay).",
      ],
      cachchebien: [
        "Sơ chế các nguyên liệu Thịt ba chỉ bò bạn mua về r…thành các lát mỏng và có độ dài khoảng 1 gang tay.",
        "Kế tiếp bạn cho thịt ba chỉ bò vào tô ướp cùng 1/…nêm rồi dùng đũa trộn đều để thịt thấm đều gia vị.",
        "Với nấm kim châm bạn cắt bỏ gốc, rồi tách thành từ…vừa ăn, đem rửa vài lần với nước cho sạch, để ráo.",
        "Ớt chuông rửa sơ qua với nước, cắt bỏ cuốn và hạt, sau đó cắt thành các thanh dài.",
        "Cuộn và áp chảo thịt ba chỉ bò Bạn trải thịt bò cắ…, sau đó cuộn lại rồi dùng 1 chiếc tăm để cố định.",
        "Bắc chảo lên bếp, cho vào 1 muỗng canh dầu ăn đun với lửa vừa.",
        "Khi dầu nóng bạn cho bò vào áp chảo khoảng 1 - 2 phút, đợi bò chín vàng đều thì cho ra dĩa.",
      ],
      ten: " Ba chỉ bò cuộn nấm kim châm",
      categoryFood: 1,
    },
    {
      id: "18",
      image:
        "https://cdn.tgdd.vn/2022/04/CookRecipe/GalleryStep/thanh-pham-41.jpg",
      nguyenlieu: [
        "Bí đỏ 300 gr .",
        "Thịt bằm 100 gr .",
        "Dầu ăn 1 muỗng canh .",
        "Hành tím 2 củ .",
        "Gia vị thông dụng 1 ít (Muối/ đường/ bột ngọt/ hạt nêm/ tiêu xay).",
      ],
      cachchebien: [
        "Sơ chế các nguyên liệu Bí đỏ sau khi mua về bạn dù…h và cắt thành các miếng mỏng vừa ăn (khoảng 3mm).",
        "Thịt bằm để tiện bạn có thể mua ngoài chợ hoặc có thể mua thịt nạc và dùng dao bằm nhuyễn.",
        "Tiếp đó, cho thịt băm vào tô cùng 1 muỗng cà phê …, trộn đều và ướp khoảng 10 phút cho thịt thấm vị.",
        "Hành tím bạn lột vỏ và băm nhỏ.",
        "Nấu canh bí đỏ thịt bằm Bắc nồi lên bếp, cho vào n…ịt băm đã ướp vào xào sơ đều đến khi thịt săn lại.",
        "Sau đó, cho thêm 500ml nước và nêm gia vị gồm: 1 … vào nồi rồi đun với lửa vừa cho đến khi canh sôi.",
        "Sau khi nước canh sôi được 5 phút, bạn cho bí vào… nữa và nêm nếm lại gia vị cho vừa ăn rồi tắt bếp.",
      ],
      ten: " Canh bí đỏ thịt bằm",
      categoryFood: 3,
    },
    {
      id: "19",
      image:
        "https://cdn.tgdd.vn/2021/12/CookRecipe/GalleryStep/thanh-pham-534.jpg",
      nguyenlieu: [
        "Rau đay 400 gr ",
        "Tôm khô 100 gr ",
        "Nước lọc 500 ml ",
        "Gia vị thông dụng 1 ít (muối/ hạt nêm/ bột ngọt/ tiêu xay)",
      ],
      cachchebien: [
        "Sơ chế các nguyên liệu Rau đay bạn ngắt lấy phần n… nước sạch khoảng 2 - 3 lần rồi để ráo và cắt nhỏ.",
        "Tôm khô cho vào chén ngâm với nước ấm khoảng 15 phút, sau đó rửa lại với nước sạch rồi để ráo.",
        "Nấu canh rau đay với tôm khô Bắc nồi lên bếp, cho … lửa lớn, đậy nắp lại và nấu cho đến khi nước sôi.",
        "Sau khoảng 5 phút thì nước sôi, bạn cho phần rau đay đã băm nhỏ vào nồi và khuấy đều khoảng 3 phút.",
        "Tiếp theo, nêm vào nồi 1 muỗng canh muối, 1 muỗng…p tục nấu thêm khoảng 5 phút cho nước sôi trở lại.",
        "Cuối cùng, nêm nếm lại cho hợp khẩu vị rồi tắt bếp và cho canh ra tô là hoàn thành.",
      ],
      ten: " Canh rau đay với tôm khô",
      categoryFood: 3,
    },
    {
      id: "20",
      image:
        "https://cdn.tgdd.vn/2021/12/CookDish/cach-lam-canh-hen-nau-he-ngon-don-gian-doi-vi-cho-bua-com-nha-avt-1200x676.jpg",
      nguyenlieu: [
        "Hến làm sẵn 100 gr .",
        "Hẹ 50 gr .",
        "Hành lá cắt nhỏ 1 muỗng canh .",
        "Nước mắm 1.",
        "5 muỗng cà phê .",
        "Gia vị thông dụng 1 ít (đường/ muối/ bột ngọt/ hạt nêm) Dầu ăn 1 muỗng canh.",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Hẹ bạn rửa sạch rồi cắt thành những đoạn khoảng 2 đốt ngón tay.",
        "Để loại bỏ bụi bẩn của hến thì bạn nên trụng qua nước sôi khoảng 3 phút hoặc rửa thật sạch với nước.",
        "Tiếp theo bạn cho hến vào nồi rồi luộc cùng với khoảng 1 lít nước.",
        "Khi nước sôi thì bạn hạ lửa nhỏ và nấu thêm khoảng 3 phút nữa rồi vớt hến ra để riêng.",
        "Làm canh hến nấu hẹ Đầu tiên bạn đặt nồi lên bếp c…cắt nhỏ và 1 muỗng canh dầu ăn tiến hành phi thơm.",
        "Sau đó, bạn cho hến vào với 1/2 muỗng cà phê hạt nêm rồi xào khoảng 1 phút.",
        "Kế tiếp bạn cho 500ml nước hến vào nồi rồi nấu sôi.",
        "Sau khi nước sôi thì bạn hạ lửa vừa và nêm gia vị gồm 1.",
        "5 muỗng cà phê hạt nêm, 1/3 muỗng cà phê muối, 1 muỗng cà phê bột ngọt, 1.",
        "5 muỗng cà phê nước mắm.",
        "Cuối cùng bạn cho hẹ vào, nêm lại cho vừa ăn tắt bếp.",
      ],
      ten: " Canh hến nấu hẹ",
      categoryFood: 3,
    },
    {
      id: "21",
      image: "https://cdn.tgdd.vn/2021/10/CookRecipe/Avatar/thumb-1.jpg",
      nguyenlieu: [
        "Rong biển khô 50 gr (loại dùng nấu canh) .",
        "Đậu hũ non 200 gr.",
        "Đầu tôm 10 cái Hành lá 3 nhánh .",
        "Gia vị thông dụng 1 ít (muối/ đường/ bột ngọt).",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Cho rong biển ra thau cùng với … ngâm trong vòng 15 - 20 phút cho rong biển nở ra.",
        "Sau đó, đem rong biển xả lại với nước sạch khoảng 2 - 3 lần và cho ra rổ để ráo.",
        "Đầu tôm bạn đem cắt đi phần râu, loại bỏ chất bẩn bên trong và rửa sạch.",
        "Đậu hũ non mua về cắt nhẹ tay thành các miếng vuông nhỏ vừa ăn.",
        "Lột sạch lớp vỏ bên ngoài của hành lá và bỏ đi phần rễ, đem đi rửa sạch.",
        "Sau đó cắt nhỏ phần đầu hành, phần lá cắt khúc.",
        "Nấu canh Cho khoảng 1 lít nước vào nồi rồi đun sôi với lửa lớn trong 5 phút.",
        "Sau khi nước sôi bạn cho đầu tôm vào và nấu với lửa vừa trong 5 phút.",
        "Sau khi phần đầu tôm chuyển từ màu xám thành màu …c chín thì bạn cho phần đầu hành được cắt nhỏ vào.",
        "Nêm vào nồi canh 2 muỗng cà phê bột ngọt, 2 muỗng cà phê đường, 1/2 muỗng cà phê muối.",
        "Sau khi canh sôi lại lần nữa thì bạn cho rong biể… thể nêm nếm lại gia vị cho vừa miệng rồi tắt bếp.",
        "Cho canh ra tô và thêm một ít hành lá cắt khúc vào là hoàn thành.",
      ],
      ten: "Canh rong biển đậu hũ non",
      categoryFood: 3,
    },
    {
      id: "22",
      image:
        "https://cdn.tgdd.vn/2021/03/CookProduct/BeFunky-collage(3)-1200x676-1.jpg",
      nguyenlieu: [
        "Rau muống 300 gr .",
        "Mực tươi 200 gr .",
        "Tỏi 4 tép .",
        "Sa tế 1 muỗng cà phê .",
        "Dầu ăn 1 muỗng canh .",
        "Hạt nêm 1 muỗng cà phê .",
        "Gia vị thông dùng 1 ít (đường/muối/bột ngọt).",
      ],
      cachchebien: [
        "Sơ chế nguyên liệu Rau muống sau khi mua về thì bạ…ng 2 đốt ngón tay rồi rửa sạch nhiều lần với nước.",
        "Cuối cùng, bạn vớt rau muống ra rổ để ráo nước.",
        "Mực mua về bạn rút riêng đầu, bỏ phần túi mực và màng nhầy ngay cuối đầu mực.",
        "Sau đó bạn rút xương sống dọc lưng mực và nhẹ nhà…u tím bên ngoài, sau đó, rửa sạch rồi để ráo nước.",
        "Tiếp đến, bạn cắt mực thành từng khoanh vừa ăn cho vào tô.",
        "Tỏi thì bạn bóc sạch vỏ rồi băm nhỏ.",
        "Ướp mực Tiếp theo, bạn cho vào tô mực đã sơ chế 1 …ột ngọt rồi dùng đũa trộn cho gia vị thấm đều mực.",
        "Thời gia tiến hành ướp mực là khoảng 20 phút.",
        "Xào rau muống với mực Đầu tiên, bạn bắc chảo lên bếp rồi cho vào chảo 1 muỗng canh dầu ăn.",
        "Khi dầu nóng lên thì cho tỏi vào phi thơm rồi cho mực đã ướp vào.",
        "Dùng đũa đảo sơ khoảng 30 giây đến khi mực săn lại thì bạn cho rau muống vào.",
        "Cuối cùng, nêm thêm vào 1/2 muỗng cà phê hạt nêm … muống chín thì nêm nếm lại cho vừa ăn và tắt bếp.",
      ],
      ten: "Mực xào rau muống",
      categoryFood: 3,
    },
  ]);

  return (
    <DishContext.Provider value={{ dish, setDish }}>
      {children}
    </DishContext.Provider>
  );
};

export default DishContext;
