/**
 * KRISHNA LEELAS - SACRED & MODERN IMMERSIVE DIGITAL JOURNEY
 * Complete Master Implementation:
 * - 16 Exact stories with updated titles (गोपी वस्त्रहरण, कंस संहार, पद प्रक्षालन)
 * - Story 1 revised sentence: "उस समय यह भविष्यवाणी हुई थी कि देवकी की आठवीं संतान कंस के अत्याचार का अंत करेगी।"
 * - Life Lessons Categories: Unconditional Love, Pure Friendship, Righteous Courage, Divine Wisdom
 * - True Autoplay Divine Flute (triggers immediately on page load, preserves state across navigation)
 * - Default language: Hindi (Strict English numerals 0-9 in English mode)
 * - Dedicated Story Webpages (story.html?id=X)
 * - Authentic Indian Spiritual Storyteller starting with "Shree Krishnaaya Namah"
 * - 1:1 Golden Craftsmanship Image Frame with Full-Screen Lightbox expansion
 */

// 1. DATASET OF 16 SACRED STORIES
const STORIES_DATA = [
  {
    "id": 1,
    "theme": "courage",
    "slug": "karagrha-janma",
    "title": {
      "en": "Karagrha Janma",
      "hi": "कारागृह जन्म"
    },
    "subtitle": {
      "en": "Krishna’s Birth in Kansa’s Prison",
      "hi": "कंस के कारागार में प्रभु श्रीकृष्ण का पावन प्राकट्य"
    },
    "about": {
      "en": "In the dark prison of Mathura, Devaki and Vasudeva were held captive by the cruel King Kansa. A prophecy had foretold that Devaki’s eighth child would bring an end to Kansa’s tyranny.\n\nOn the sacred night of Krishna Janmashtami, at midnight, Lord Krishna was born as their eighth child. At that divine moment, the prison was filled with a celestial light. The guards fell into a deep sleep, the chains binding Vasudeva loosened, and the locked prison doors miraculously opened.\n\nThe little child born within prison walls had come to free the world from fear, injustice and oppression.",
      "hi": "मथुरा के अंधकारमय कारागार में क्रूर राजा कंस ने देवकी और वसुदेव को बंदी बना रखा था। उस समय यह भविष्यवाणी हुई थी कि देवकी की आठवीं संतान कंस के अत्याचार का अंत करेगी।\n\nभाद्रपद कृष्ण अष्टमी की पावन मध्यरात्रि में, भगवान श्रीकृष्ण ने आठवीं संतान के रूप में जन्म लिया। उस दिव्य क्षण में संपूर्ण कारागार अलौकिक प्रकाश से आलोकित हो उठा। पहरेदार गहरी निद्रा में सो गए, वसुदेव की बेड़ियाँ स्वतः खुल गईं और बंद लौह कपाट चमत्कारिक रूप से खुल गए।\n\nकारागार की दीवारों के भीतर जन्मा वह नन्हा बालक संसार को भय, अन्याय और उत्पीड़न से मुक्त करने आया था।"
    },
    "lessonHighlight": {
      "en": "Light can be born even in the darkest place.",
      "hi": "घोर से घोर अंधकार में भी प्रकाश का जन्म हो सकता है।"
    },
    "lesson": {
      "en": "Krishna’s birth reminds us that no darkness lasts forever. Even when circumstances seem hopeless, faith, courage and goodness can create a new beginning.",
      "hi": "श्रीकृष्ण का जन्म हमें स्मरण कराता है कि कोई भी अंधकार सदा के लिए नहीं रहता। जब परिस्थितियाँ पूरी तरह निराशाजनक प्रतीत हों, तब भी अटूट विश्वास, साहस और भलाई एक नए प्रभात का सृजन कर सकती है।"
    }
  },
  {
    "id": 2,
    "theme": "courage",
    "slug": "yamuna-taran",
    "title": {
      "en": "Yamuna Taran",
      "hi": "यमुना तरण"
    },
    "subtitle": {
      "en": "Vasudeva Crosses the Yamuna with Baby Krishna",
      "hi": "तूफानी यमुना को पार कर बाल कान्हा को गोकुल ले जाते वसुदेव"
    },
    "about": {
      "en": "On the night Krishna was born, the prison doors miraculously opened and Vasudeva was guided to carry the newborn Krishna from Mathura to the safety of Gokul.\n\nWith baby Krishna resting in a basket upon his head, Vasudeva stepped into the swollen Yamuna, while heavy rain poured around him. As he moved forward, the waters rose higher and higher. Sheshnag appeared and spread his hoods over baby Krishna, protecting him from the storm.\n\nThe Yamuna is also traditionally described as rising to touch Krishna’s divine feet before making way for Vasudeva to cross safely. Guided and protected by divine grace, Vasudeva reached Gokul and entrusted Krishna to the care of Nanda and Yashoda.",
      "hi": "जिस रात्रि श्रीकृष्ण का जन्म हुआ, कारागार के द्वार चमत्कारिक रूप से खुल गए और वसुदेव को नवजात कृष्ण को मथुरा से सुरक्षित गोकुल ले जाने की दिव्य प्रेरणा मिली।\n\nसिर पर सूप में बाल कृष्ण को विराजमान कर, वसुदेव मूसलाधार वर्षा के बीच उफनती हुई यमुना में उतर पड़े। जैसे-जैसे वे आगे बढ़े, जलस्तर बढ़ता गया। तभी शेषनाग ने प्रकट होकर अपने सहस्त्र फनों की छत्रछाया से बाल कृष्ण को तूफानी वर्षा से सुरक्षित किया।\n\nपरंपरागत कथा के अनुसार, यमुना जी ने प्रभु के श्रीचरणों का स्पर्श करने के लिए अपना जल स्तर उठाया और स्पर्श पाते ही शांत होकर मार्ग दे दिया। ईश्वरीय कृपा से वसुदेव गोकुल पहुंचे और कान्हा को नंदराय जी और यशोदा मैया के वात्सल्य में सौंप दिया।"
    },
    "lessonHighlight": {
      "en": "When we walk with faith, a path appears even through the impossible.",
      "hi": "जब हम विश्वास के साथ कदम बढ़ाते हैं, तो असंभव में भी मार्ग बन जाता है।"
    },
    "lesson": {
      "en": "Yamuna Taran teaches us that courage does not mean the absence of fear. Vasudeva stepped into the raging river because he trusted the path before him. Faith gives us the strength to take the next step, even when we cannot see the entire journey.",
      "hi": "यमुना तरण हमें सिखाता है कि साहस का अर्थ भय की अनुपस्थिति नहीं है। वसुदेव उस उफनती नदी में इसलिए उतरे क्योंकि उन्हें ईश्वर द्वारा दिखाए गए मार्ग पर विश्वास था। विश्वास हमें वह शक्ति देता है जिससे हम अगला कदम उठा सकें, भले ही पूरी यात्रा अभी दिखाई न दे रही हो।"
    }
  },
  {
    "id": 3,
    "theme": "courage",
    "slug": "putana-vadha",
    "title": {
      "en": "Putana Vadha / Putana Moksha",
      "hi": "पूतना वध व मोक्ष"
    },
    "subtitle": {
      "en": "Krishna Liberates Putana",
      "hi": "विष पिलाने आई राक्षसी को भी भगवान ने प्रदान की माता की गति"
    },
    "about": {
      "en": "Fearing the prophecy of his death, Kansa sent the demoness Putana to kill baby Krishna. Disguised as a beautiful woman, she entered Gokul and approached Krishna with poisoned milk, intending to nurse him and take his life.\n\nBut Krishna knew her true form. As Putana fed him, he drew out not only the poisoned milk but also her very life force. She fell, revealing her enormous demonic form.\n\nYet Krishna did something extraordinary—because Putana had approached him in the role of a mother and offered him milk, even with an evil intention, he granted her liberation (moksha).",
      "hi": "अपनी मृत्यु की भविष्यवाणी से भयभीत होकर कंस ने बाल कृष्ण को समाप्त करने के लिए पूतना राक्षसी को भेजा। एक सुंदरी का रूप धरकर वह गोकुल में प्रविष्ट हुई और अपने स्तनों पर कालकूट विष लगाकर कान्हा को दूध पिलाने लगी।\n\nपरंतु सर्वज्ञ श्रीकृष्ण उसका वास्तविक स्वरूप जानते थे। जैसे ही पूतना ने उन्हें स्तनपान कराया, प्रभु ने विषैले दूध के साथ उसके प्राण और संचित पापों को भी खींच लिया। वह अपने विशाल विकराल राक्षसी रूप में गिर पड़ी।\n\nतथापि श्रीकृष्ण ने एक अलौकिक कार्य किया—चूँकि पूतना माता का वेष धारण कर आई थी और उसने दूध पिलाया था, भले ही दुर्भावना से, प्रभु ने उसके बाह्य कपट को भुलाकर उसे गोलोक में धात्री-माता का पावन पद और मोक्ष प्रदान किया।"
    },
    "lessonHighlight": {
      "en": "Divine grace can transform even darkness into liberation.",
      "hi": "ईश्वरीय कृपा अंधकार को भी मोक्ष में रूपांतरित कर सकती है।"
    },
    "lesson": {
      "en": "Putana Moksha reminds us that no one is beyond transformation or redemption. Krishna looked beyond Putana’s wicked intention and accepted even the smallest semblance of maternal service, showing us the immense power of compassion and grace.",
      "hi": "पूतना मोक्ष हमें स्मरण कराता है कि कोई भी आत्मा रूपांतरण या उद्धार से परे नहीं है। श्रीकृष्ण ने पूतना की दुष्ट भावना को दरकिनार कर मातृवत सेवा के तनिक से अंश को स्वीकार किया, जो करुणा और कृपा की असीम शक्ति का दर्शन कराता है।"
    }
  },
  {
    "id": 4,
    "theme": "love",
    "slug": "navnit-bhakshan-leela",
    "title": {
      "en": "Navnit Bhakshan Leela",
      "hi": "नवनीत भक्षण लीला"
    },
    "subtitle": {
      "en": "Yashoda Lovingly Feeds Krishna Butter",
      "hi": "मैया यशोदा का अपने हाथों से कान्हा को माखन खिलाना"
    },
    "about": {
      "en": "In the loving home of Nanda and Yashoda, little Krishna had a special fondness for navnit—freshly churned butter. While he would later become famous as the mischievous Makhan Chor, some of the sweetest moments were those when Mother Yashoda lovingly fed him butter with her own hands.\n\nThe Lord who sustains the entire universe became a little child before a mother—waiting for another morsel, smiling at her, and accepting her affection with innocent delight.\n\nThrough this simple act, the divine became deeply personal: the Supreme Lord allowed himself to be nourished by a mother’s love.",
      "hi": "नंदबाबा और मैया यशोदा के स्नेहमयी घर में, नन्हे कान्हा को नवनीत यानी ताजे मथे हुए माखन से विशेष प्रेम था। यद्यपि वे आगे चलकर नटखट माखन चोर के रूप में प्रसिद्ध हुए, परंतु सबसे मधुर क्षण वे थे जब माता यशोदा अपने हाथों से बड़े दुलार से उन्हें माखन खिलाती थीं।\n\nजो परमात्मा संपूर्ण ब्रह्मांड का पोषण करता है, वह एक माता के सम्मुख नन्हा बालक बनकर अगले निवाले की प्रतीक्षा करता, मुस्कुराता और बालसुलभ आनंद से वात्सल्य स्वीकार करता था।\n\nइस सरल लीला के माध्यम से ईश्वर अत्यंत आत्मीय बन गए: जगदाधार ने स्वयं को एक माँ के प्रेम से पोषित होने दिया।"
    },
    "lessonHighlight": {
      "en": "Love is most powerful when expressed through simple acts of care.",
      "hi": "प्रेम सबसे अधिक शक्तिशाली तब होता है जब वह छोटे-छोटे सेवा-भावों में प्रकट होता है।"
    },
    "lesson": {
      "en": "Navnit Bhakshan Leela reminds us that devotion does not always require grand gestures. A meal offered with love, a caring hand, or a small act done wholeheartedly can become an expression of the divine.",
      "hi": "नवनीत भक्षण लीला हमें सिखाती है कि भक्ति के लिए सदा बड़े आयोजनों या आडंबरों की आवश्यकता नहीं होती। प्रेमपूर्वक परोसा गया सादा भोजन, एक स्नेहमयी स्पर्श या सच्चे मन से किया गया छोटा सा कार्य भी परमात्मा की आराधना बन जाता है।"
    }
  },
  {
    "id": 5,
    "theme": "friendship",
    "slug": "makhan-chori-leela",
    "title": {
      "en": "Makhan Chori Leela",
      "hi": "माखन चोरी लीला"
    },
    "subtitle": {
      "en": "Krishna, the Beloved Makhan Chor",
      "hi": "गोकुल का प्रिय माखनचोर, जिसने चुराया सबका दिल"
    },
    "about": {
      "en": "Little Krishna’s love for navnit—freshly churned butter soon turned into one of his most endearing childhood mischiefs. Along with his friends, Krishna would sneak into the homes of the Gopis, climb onto overturned pots and stools, and steal butter stored high beyond his reach.\n\nSometimes he would eat it himself, sometimes share it with his friends, and sometimes even feed it to the monkeys! The Gopis would come to Mother Yashoda with endless complaints, yet Krishna’s innocent expressions and playful excuses made it impossible to remain angry with him for long.\n\nSoon, the little butter thief of Gokul became everyone’s beloved Makhan Chor—stealing not just butter, but the hearts of all who loved him.",
      "hi": "नन्हे कृष्ण का ताजे माखन के प्रति प्रेम शीघ्र ही उनकी सबसे प्रिय बाल-लीलाओं में बदल गया। अपने ग्वाल-बाल सखाओं के साथ मिलकर वे गोपियों के घरों में चुपके से घुस जाते, मटकियों और पीढ़ियों पर चढ़ते और छींके पर लटकी मटकियों से माखन चुरा लेते।\n\nकभी वे स्वयं खाते, कभी मित्रों में बाँटते और कभी वानरों को खिला देते! गोपियाँ यशोदा मैया के पास उलहाने लेकर आती थीं, परंतु कान्हा के भोले मुखमंडल और नटखट बहानों को देखकर कोई भी उन पर अधिक देर तक क्रोधित नहीं रह पाता था।\n\nशीघ्र ही गोकुल का वह नन्हा चोर सबका प्रिय माखन चोर बन गया—जिसने केवल माखन ही नहीं, बल्कि हर भक्त का हृदय चुरा लिया था।"
    },
    "lessonHighlight": {
      "en": "Joy lives in sharing, simplicity and togetherness.",
      "hi": "आनंद बाँटने, सरलता और परस्पर साथ में ही निवास करता है।"
    },
    "lesson": {
      "en": "Makhan Chori Leela reminds us not to lose the playfulness of childhood. Krishna’s mischief brought people together and filled ordinary homes with laughter. Life becomes richer when we share what we have, cherish our relationships and leave a little room for innocent joy.",
      "hi": "माखन चोरी लीला हमें बचपन के भोलापन और आनंद को कभी न खोने का संदेश देती है। कान्हा की शरारतों ने लोगों को परस्पर जोड़ा और साधारण घरों को हंसी से भर दिया। जीवन तब समृद्ध बनता है जब हम जो कुछ हमारे पास है उसे बाँटते हैं, रिश्तों का सम्मान करते हैं और मन में निष्कपट आनंद के लिए स्थान रखते हैं।"
    }
  },
  {
    "id": 6,
    "theme": "wisdom",
    "slug": "yamalarjuna-bhanjana",
    "title": {
      "en": "Yamalarjuna Bhanjana",
      "hi": "यमलार्जुन भंजन"
    },
    "subtitle": {
      "en": "Krishna Uproots the Twin Arjuna Trees",
      "hi": "ओखली से यमलार्जुन वृक्षों को उखाड़कर कुबेर पुत्रों का उद्धार"
    },
    "about": {
      "en": "After one of little Krishna’s mischievous adventures, Mother Yashoda tied him to a heavy wooden mortar (ukhala). Krishna began crawling away, dragging the mortar behind him, until he passed between two tall Arjuna trees. The mortar became stuck between them, but with one powerful pull, Krishna brought both trees crashing to the ground.\n\nFrom the fallen trees emerged Nalakuvara and Manigriva, sons of Kubera. Once consumed by wealth and pride, they had been cursed by Sage Narada to remain as trees until Krishna came to liberate them.\n\nWith Krishna’s touch, their long wait ended. Humbled and transformed, they offered their prayers to him and were freed from the curse.",
      "hi": "कान्हा की नटखट हरकतों से परेशान होकर माता यशोदा ने उन्हें एक भारी काष्ठ की ओखली से बाँध दिया। बाल कृष्ण घुटनों के बल रेंगते हुए ओखली को घसीटने लगे और दो विशाल अर्जुन वृक्षों के मध्य से निकले। ओखली दोनों वृक्षों के बीच फँस गई, और कान्हा के एक ही सहज खिंचाव से दोनों वृक्ष गड़गड़ाहट के साथ धराशायी हो गए।\n\nगिरे हुए वृक्षों से कुबेर के दो पुत्र, नलकूबर और मणिग्रीव, दिव्य रूप में प्रकट हुए। कभी धन और ऐश्वर्य के घमंड में चूर होने के कारण उन्हें देवर्षि नारद ने वृक्ष बनने का शाप दिया था, जिसका अंत श्रीकृष्ण के स्पर्श से ही होना था।\n\nप्रभु के पावन स्पर्श से उनकी युगों की प्रतीक्षा समाप्त हुई। विनम्र और रूपांतरित होकर उन्होंने श्रीकृष्ण की स्तुति की और शाप-मुक्त होकर अपने लोक को प्रस्थान किया।"
    },
    "lessonHighlight": {
      "en": "True freedom begins when pride falls away.",
      "hi": "सच्ची स्वतंत्रता वहीं से आरंभ होती है जहाँ अहंकार का पतन होता है।"
    },
    "lesson": {
      "en": "Yamalarjuna Bhanjana teaches us that wealth, status and privilege can become chains when accompanied by arrogance. Humility helps us recognise what truly matters. Like the two trees that fell before they could be liberated, sometimes we must let our ego fall before we can truly grow.",
      "hi": "यमलार्जुन भंजन हमें सिखाता है कि जब धन, पद और प्रतिष्ठा के साथ अहंकार जुड़ जाता है, तो वे ही हमारी बेड़ियाँ बन जाते हैं। विनम्रता हमें जीवन के वास्तविक मूल्यों का बोध कराती है। जैसे वे दोनों वृक्ष मुक्त होने से पहले गिरे, वैसे ही जीवन में सच्चे उत्थान के लिए हमें अपने अहंकार को गिराना पड़ता है।"
    }
  },
  {
    "id": 7,
    "theme": "friendship",
    "slug": "krishna-ki-toli",
    "title": {
      "en": "Krishna ki Toli",
      "hi": "कृष्णा की टोली"
    },
    "subtitle": {
      "en": "Krishna Flying Kites with His Friends",
      "hi": "गोकुल के खुले गगन में सखाओं संग पतंग उड़ाते कन्हैया"
    },
    "about": {
      "en": "The lanes and fields of Gokul were filled with the laughter of little Krishna and his beloved group of friends. Together they played games, tended the calves, shared food, teased one another and turned even the simplest moments into joyful adventures.\n\nImagine Krishna and his toli gathered beneath the open sky, flying colourful kites—one friend holding the spool, another cheering as the kite climbs higher, while Krishna delights in the fun. These playful moments beautifully represent Krishna’s Bal Leela: the Lord himself experiencing the innocence, friendship and carefree happiness of childhood.\n\nFor Krishna and his friends, joy did not require anything extraordinary—a kite, an open sky and good company were enough.",
      "hi": "गोकुल की गलियाँ और हरी-भरी चरागाहें नन्हे कान्हा और उनके प्रिय बाल-सखाओं के हास-परिहास से गूंजती रहती थीं। वे सब मिलकर खेल खेलते, बछड़ों को चराते, भोजन साझा करते और साधारण से साधारण पलों को भी आनंदमय उत्सव बना देते थे।\n\nखुले नीले आकाश के नीचे कन्हैया अपनी टोली के साथ रंग-बिरंगी पतंगें उड़ाते—एक सखा चरखी थामे होता, दूसरा पतंग के ऊंचे उठने पर जयकारे लगाता, और कृष्ण उस खेल में मगन होते। ये बाल-सुलभ क्षण श्रीकृष्ण की बाल-लीला का सौंदर्य हैं: साक्षात जगदीश्वर ने बचपन की निश्छलता, मित्रता और सहज उल्लास का अनुभव किया।\n\nकृष्ण और उनके मित्रों के लिए आनंद के लिए किसी भव्य साधन की आवश्यकता नहीं थी—एक पतंग, खुला आकाश और सच्चे मित्रों का संग ही पर्याप्त था।"
    },
    "lessonHighlight": {
      "en": "The simplest moments often become our most precious memories.",
      "hi": "जीवन के सबसे साधारण क्षण ही प्रायः हमारी सबसे अनमोल स्मृतियाँ बन जाते हैं।"
    },
    "lesson": {
      "en": "Krishna ki Toli reminds us to value friendship, playfulness and being fully present with the people we love. Happiness is not always found in grand achievements; sometimes, it is simply a kite in the sky, laughter among friends and a moment enjoyed together.",
      "hi": "कृष्णा की टोली हमें मित्रता, आमोद-प्रमोद और अपनों के साथ वर्तमान क्षण में पूरी तरह जीने का महत्व सिखाती है। प्रसन्नता सदा बड़ी उपलब्धियों में नहीं मिलती; कभी-कभी वह केवल आकाश में उड़ती पतंग, मित्रों की निश्छल हंसी और साथ बिताए गए एक सुंदर पल में समाई होती है।"
    }
  },
  {
    "id": 8,
    "theme": "love",
    "slug": "krishna-balaram",
    "title": {
      "en": "Krishna Balaram",
      "hi": "कृष्ण-बलराम"
    },
    "subtitle": {
      "en": "The Bond of Two Brothers",
      "hi": "गोकुल व वृंदावन में परस्पर रक्षा, स्नेह और भ्रातृ-प्रेम"
    },
    "about": {
      "en": "Krishna and his elder brother Balaram grew up together in the joyful surroundings of Gokul and Vrindavan. From tending cows and playing in the fields to sharing childhood mischief and facing dangers together, the two brothers were constant companions.\n\nBalaram, known for his immense strength and protective nature, often stood beside Krishna, while Krishna filled their adventures with his wisdom, courage and playfulness. Their personalities were different, yet beautifully complementary.\n\nTheir childhood represents more than divine adventures—it celebrates the simple and enduring bond between brothers: growing together, protecting one another and standing side by side through every experience.",
      "hi": "श्रीकृष्ण और उनके बड़े भ्राता बलराम गोकुल और वृंदावन की सुरम्य भूमि में साथ-साथ बड़े हुए। गायों को चराने और वनों में खेलने से लेकर बाल-सुलभ शरारतों और असुरों के संकटों का सामना करने तक, दोनों भाई सदैव एक-दूसरे के अभिन्न साथी रहे।\n\nबलराम जी, जो अपने अगाध बल और रक्षात्मक स्वभाव के लिए जाने जाते थे, सदैव कृष्ण के पक्ष में ढाल बनकर खड़े रहते; वहीं कृष्ण अपने विवेक, साहस और लीलाभाव से उनके जीवन को आलोकित करते थे। दोनों का स्वभाव भिन्न था, परंतु परस्पर अत्यंत पूरक और समरस था।\n\nउनका बचपन केवल दिव्य गाथा नहीं—बल्कि भाइयों के उस शाश्वत और अटूट संबंध का उत्सव है, जहाँ दोनों साथ बढ़ते हैं, एक-दूसरे की रक्षा करते हैं और हर परिस्थिति में कंधे से कंधा मिलाकर खड़े रहते हैं।"
    },
    "lessonHighlight": {
      "en": "Our greatest strength often comes from those who stand beside us.",
      "hi": "हमारी सबसे बड़ी शक्ति प्रायः उन लोगों से मिलती है जो हमारे साथ खड़े रहते हैं।"
    },
    "lesson": {
      "en": "Krishna and Balaram teach us that relationships flourish through love, loyalty and mutual support. We do not have to be alike to share a strong bond; sometimes our differences are exactly what allow us to complement and strengthen one another.",
      "hi": "कृष्ण और बलराम हमें सिखाते हैं कि संबंध प्रेम, निष्ठा और परस्पर सहयोग से ही फलते-फूलते हैं। एक गहरा संबंध साझा करने के लिए एक जैसा होना आवश्यक नहीं; कभी-कभी हमारी भिन्नताएँ ही हमें एक-दूसरे का पूरक और अधिक सशक्त बनाती हैं।"
    }
  },
  {
    "id": 9,
    "theme": "courage",
    "slug": "kaliya-mardhana",
    "title": {
      "en": "Kaliya Mardhana",
      "hi": "कालिया मर्दन"
    },
    "subtitle": {
      "en": "Krishna Subdues Kaliya Naag",
      "hi": "यमुना को विषमुक्त कर कालिया नाग पर दिव्य नृत्य"
    },
    "about": {
      "en": "The serpent Kaliya had made his home in the Yamuna, poisoning its waters with his venom and making the river dangerous for the people and animals of Vrindavan.\n\nOne day, young Krishna leapt into the Yamuna and confronted the mighty serpent. Kaliya wrapped his coils around Krishna, but Krishna effortlessly freed himself and climbed upon the serpent’s many hoods. He then began to dance upon Kaliya’s heads, gradually crushing his arrogance and exhausting his strength.\n\nSeeing Kaliya defeated, his wives, the Nagapatnis, prayed to Krishna for mercy. Krishna spared Kaliya’s life and ordered him to leave the Yamuna. Humbled, Kaliya departed with his family, and the waters became pure and safe once again.",
      "hi": "कालिया नाग ने यमुना के अथाह कुंड में अपना वास बना लिया था, जिससे उसके भयंकर विष से यमुना का जल विषैला हो गया और वृंदावन के पशु-पक्षी और ग्वाले संकट में पड़ गए।\n\nएक दिन बालक कृष्ण यमुना के जल में कूद पड़े और उस महाबली सर्प का सामना किया। कालिया ने अपनी विशाल कुंडलियों से कृष्ण को लपेटने का प्रयास किया, परंतु प्रभु ने सहजता से स्वयं को मुक्त कर उसके फनों पर आरोहण किया। फिर उन्होंने कालिया के मस्तक पर अलौकिक नृत्य आरंभ किया, जिससे उसका सारा घमंड चूर-चूर हो गया।\n\nकालिया को पराजित देखकर उसकी पत्नियों, नागपत्नियों ने हाथ जोड़कर कान्हा से प्राण-दान की प्रार्थना की। दयालु प्रभु ने कालिया के प्राण बख्श दिए और उसे यमुना त्यागकर जाने का आदेश दिया। नतमस्तक होकर कालिया परिवार सहित चला गया और यमुना का जल पुनः अमृततुल्य और पावन हो गया।"
    },
    "lessonHighlight": {
      "en": "True strength is not just defeating evil—it is knowing when to show mercy.",
      "hi": "सच्ची शक्ति केवल बुराई को परास्त करने में नहीं—बल्कि क्षमा और दया करने में है।"
    },
    "lesson": {
      "en": "Kaliya Mardhana teaches us to face fear, negativity and arrogance with courage, but also reminds us that victory need not end in destruction. Krishna subdued Kaliya, gave him an opportunity to change, and restored harmony—showing us that strength guided by compassion creates lasting peace.",
      "hi": "कालिया मर्दन हमें भय, नकारात्मकता और अहंकार का साहसपूर्वक सामना करना सिखाता है, परंतु यह भी स्मरण कराता है कि विजय का अंत केवल विनाश में नहीं होना चाहिए। श्रीकृष्ण ने कालिया का दमन किया, उसे सुधरने का अवसर दिया और सौहार्द स्थापित किया—यह दर्शाता है कि करुणा से संचालित शक्ति ही स्थायी शांति का निर्माण करती है।"
    }
  },
  {
    "id": 10,
    "theme": "wisdom",
    "slug": "govardhan-dharan",
    "title": {
      "en": "Govardhan Dharan",
      "hi": "गोवर्धन धारण"
    },
    "subtitle": {
      "en": "Krishna Lifts Govardhan Parvat",
      "hi": "कनिष्ठिका पर गिरिराज धारण कर समस्त ब्रजवासियों को दिया अभयदान"
    },
    "about": {
      "en": "The people of Vrindavan traditionally prepared grand offerings for Lord Indra, the god of rain. Young Krishna encouraged them instead to honour Govardhan Hill, the cows, the land and the community that directly sustained their lives.\n\nAngered by this, Indra sent fierce storms and torrential rain upon Vrindavan. As the frightened villagers sought protection, Krishna effortlessly lifted Govardhan Parvat on the little finger of his left hand, holding it like a giant umbrella.\n\nFor seven days and seven nights, the people and animals of Vrindavan gathered safely beneath the mountain. Finally, Indra realised his pride and stopped the storm. He approached Krishna with humility and sought forgiveness.",
      "hi": "वृंदावन के निवासी वर्षा के देवता इंद्र के लिए प्रतिवर्ष विशाल यज्ञ का आयोजन करते थे। नन्हे कृष्ण ने उन्हें समझाया कि उन्हें इंद्र के स्थान पर प्रत्यक्ष रूप से जीवन देने वाले गोवर्धन पर्वत, गौ-माता, उपजाऊ भूमि और समाज का पूजन करना चाहिए।\n\nइससे कुपित होकर इंद्र ने ब्रज पर प्रलयंकारी मेघ भेज दिए और मूसलाधार वर्षा व वज्रपात होने लगा। भयभीत ब्रजवासियों की पुकार सुनकर श्रीकृष्ण ने अपने बाएँ हाथ की कनिष्ठिका पर विशाल गोवर्धन पर्वत को एक विशाल छत्र की भाँति सहजता से उठा लिया।\n\nसात दिन और सात रात तक समस्त ब्रजवासी और मूक पशु पर्वत की छत्रछाया में सुरक्षित रहे। अंततः इंद्र का अभिमान भंग हुआ और उसने वर्षा रोक दी। इंद्र ने विनम्रतापूर्वक भगवान श्रीकृष्ण के चरणों में गिरकर क्षमा-याचना की।"
    },
    "lessonHighlight": {
      "en": "True greatness protects; it does not seek to be worshipped.",
      "hi": "सच्ची महानता रक्षा करती है; वह अपनी पूजा नहीं करवाती।"
    },
    "lesson": {
      "en": "Govardhan Dharan teaches us the importance of humility, gratitude and responsibility. Krishna used his extraordinary strength not to display his power, but to shelter his community. It reminds us that real leadership means standing strong so that others can feel safe.",
      "hi": "गोवर्धन धारण हमें विनम्रता, कृतज्ञता और उत्तरदायित्व का पाठ पढ़ाता है। श्रीकृष्ण ने अपनी अलौकिक शक्ति का उपयोग अपने बल का प्रदर्शन करने के लिए नहीं, बल्कि अपने समाज की रक्षा के लिए किया। यह हमें सिखाता है कि वास्तविक नेतृत्व वह है जो स्वयं अडिग खड़ा रहे ताकि दूसरे सुरक्षित अनुभव कर सकें।"
    }
  },
  {
    "id": 11,
    "theme": "wisdom",
    "slug": "gopi-vastraharana",
    "title": {
      "en": "Gopi Vastraharana",
      "hi": "गोपी वस्त्रहरण"
    },
    "subtitle": {
      "en": "Krishna and the Gopis’ Katyayani Vrata",
      "hi": "कात्यायनी व्रत की पूर्णता एवं बाह्य आवरणों से परे अनन्य समर्पण"
    },
    "about": {
      "en": "The young Gopis of Vrindavan observed the sacred Katyayani Vrata, praying to Goddess Katyayani with the wish that Krishna would become their beloved. As part of their morning ritual, they would bathe in the Yamuna after leaving their garments on the riverbank.\n\nOne morning, Krishna playfully gathered their clothes and climbed a nearby Kadamba tree. When the Gopis asked him to return them, Krishna used the moment to complete their vrata and draw their devotion away from outward ritual toward complete surrender and trust in the Divine.\n\nAfter their prayers and playful exchange, Krishna returned their garments and blessed them, acknowledging the sincerity of their devotion.",
      "hi": "वृंदावन की गोपियों ने देवी कात्यायनी का पावन व्रत रखा था, जिसमें वे प्रार्थना करती थीं कि श्रीकृष्ण ही उनके प्रियतम बनें। अपने प्रातःकालीन अनुष्ठान के अंग के रूप में, वे यमुना के तट पर वस्त्र छोड़कर जल में स्नान कर रही थीं।\n\nएक प्रातः कान्हा ने उनके वस्त्र समेट लिए और निकट के कदम्ब वृक्ष पर चढ़ गए। जब गोपियों ने वस्त्र लौटाने की प्रार्थना की, तो भगवान ने उस क्षण का उपयोग उनके व्रत को पूर्ण करने और उनकी भक्ति को बाह्य कर्मकांडों से उठाकर परमात्मा के प्रति पूर्ण समर्पण और विश्वास में बदलने के लिए किया।\n\nउनकी प्रार्थना और प्रेममयी वार्ता के उपरांत, कृष्ण ने उनके वस्त्र लौटा दिए और उनकी अनन्य, निष्कपट भक्ति को स्वीकार करते हुए उन्हें दिव्य आशीर्वाद दिया।"
    },
    "lessonHighlight": {
      "en": "True devotion asks us to surrender our ego, not merely perform rituals.",
      "hi": "सच्ची भक्ति हमसे अहंकार का त्याग मांगती है, केवल अनुष्ठानों का प्रदर्शन नहीं।"
    },
    "lesson": {
      "en": "Gopi Vastraharana is traditionally understood as a symbolic spiritual episode. The garments can represent the layers of ego, pride and worldly identity that we hold onto. The Leela reminds us that genuine devotion comes when we approach the Divine with sincerity, humility and an open heart.",
      "hi": "चीर हरण लीला को आध्यात्मिक दृष्टि से एक गूढ़ प्रतीक समझा जाता है। वस्त्र हमारे अहंकार, संकोच और सांसारिक पहचान की उन परतों के प्रतीक हैं जिन्हें हम पकड़े रहते हैं। यह लीला हमें सिखाती है कि वास्तविक भक्ति तब प्रकट होती है जब हम परमात्मा के सम्मुख समस्त मिथ्या आवरण हटाकर पूर्ण सरलता, विनम्रता और खुले हृदय से उपस्थित होते हैं।"
    }
  },
  {
    "id": 12,
    "theme": "love",
    "slug": "raas-leela",
    "title": {
      "en": "Raas Leela",
      "hi": "रास लीला"
    },
    "subtitle": {
      "en": "Krishna’s Divine Dance with Radha and the Gopis",
      "hi": "शरद पूर्णिमा की रात्रि में श्रीराधा और गोपियों संग दिव्य महारास"
    },
    "about": {
      "en": "On a beautiful moonlit night in Vrindavan, the enchanting sound of Krishna’s flute echoed through the forest. Drawn by its divine melody, the Gopis came to Krishna, leaving behind their worldly distractions to experience the joy of being in his presence.\n\nKrishna began the sacred Raas, dancing with the Gopis beneath the moonlit sky. Through his divine power, each Gopi experienced Krishna dancing beside her, symbolising how the Divine can be completely present for every devotee.\n\nIn the devotional tradition, Radha and Krishna embody the highest expression of prema—love that seeks nothing for itself. Raas Leela therefore represents far more than a dance; it is the celebration of the soul’s longing for and union with the Divine.",
      "hi": "वृंदावन की एक मनोहारी चाँदनी रात में, श्रीकृष्ण की बाँसुरी की सम्मोहक तान पूरे वन में गूंज उठी। उस दिव्य संगीत से आकर्षित होकर गोपियाँ अपने समस्त सांसारिक बंधनों को भुलाकर प्रभु के सान्निध्य का परमानंद पाने दौड़ी चली आईं।\n\nधवल चाँदनी के तले श्रीकृष्ण ने पावन रास का शुभारंभ किया। अपनी योगमाया के प्रभाव से प्रभु ने अनेक रूप धारण किए और प्रत्येक गोपी को यह अनुभव हुआ कि कान्हा साक्षात उसी के साथ नृत्य कर रहे हैं—जो यह दर्शाता है कि परमात्मा प्रत्येक भक्त के लिए पूर्ण रूप से सुलभ और उपस्थित हैं।\n\nभक्ति परंपरा में, श्रीराधा और श्रीकृष्ण प्रेम की सर्वोच्च पराकाष्ठा हैं—वह प्रेम जो अपने लिए कुछ नहीं चाहता। अतः रास लीला केवल एक नृत्य नहीं, अपितु जीवात्मा की परमात्मा से एकाकार होने की परम आध्यात्मिक अनुभूति का उत्सव है।"
    },
    "lessonHighlight": {
      "en": "The purest love is wholehearted, selfless and free from possession.",
      "hi": "पवित्रतम प्रेम संपूर्ण, निःस्वार्थ और अधिकार की भावना से मुक्त होता है।"
    },
    "lesson": {
      "en": "Raas Leela teaches us that true love is not about owning or controlling another. It is about devotion, presence and surrender. Just as Krishna was present for every Gopi, divine love reminds us that a heart filled with genuine love always has room to give more.",
      "hi": "रास लीला हमें सिखाती है कि सच्चा प्रेम किसी पर अधिकार जताने या नियंत्रित करने का नाम नहीं है। यह समर्पण, उपस्थिति और आत्मीयता का मार्ग है। जिस प्रकार कृष्ण प्रत्येक गोपी के लिए उपस्थित थे, उसी प्रकार दिव्य प्रेम हमें सिखाता है कि सच्चे प्रेम से परिपूर्ण हृदय में सदा और अधिक स्नेह देने का सामर्थ्य होता है।"
    }
  },
  {
    "id": 13,
    "theme": "love",
    "slug": "radha-krishna-premkatha",
    "title": {
      "en": "Radha Krishna ki Premkatha",
      "hi": "राधा-कृष्ण की अमर प्रेमकथा"
    },
    "subtitle": {
      "en": "The Eternal Story of Divine Love",
      "hi": "एक प्राण, दो देह — प्रेम और भक्ति का शाश्वत आदर्श"
    },
    "about": {
      "en": "In the sacred land of Vrindavan blossomed the timeless love of Radha and Krishna. Their bond was not defined by possessions, promises or worldly expectations, but by a profound devotion to one another.\n\nRadha’s love for Krishna represents complete bhakti—a love so pure that the self seems to disappear into the beloved. Krishna, in turn, is inseparable from Radha in the devotional imagination; together, Radha-Krishna became the eternal symbol of prema and devotion.\n\nThough Krishna eventually left Vrindavan for Mathura, their physical separation did not diminish their bond. In the Bhakti traditions, their longing itself becomes an expression of love—the idea that true connection can transcend distance, time and physical presence.\n\nTheir Premkatha is therefore not merely a romantic story; it symbolises the relationship between the individual soul and the Divine, forever longing to become one.",
      "hi": "वृंदावन की पावन धरा पर राधा और कृष्ण का शाश्वत प्रेम प्रस्फुटित हुआ। उनका यह दिव्य संबंध सांसारिक अधिकारों, वचनों या अपेक्षाओं पर नहीं, अपितु एक-दूसरे के प्रति अगाध समर्पण पर आधारित था।\n\nराधा जी का प्रेम पूर्ण भक्ति का साक्षात स्वरूप है—एक ऐसा प्रेम जिसमें स्वयं का अस्तित्व प्रियतम में विलीन हो जाता है। इसी प्रकार, भक्ति परंपरा में कृष्ण राधा के बिना अपूर्ण हैं; दोनों मिलकर राधे-कृष्ण के रूप में प्रेम और उपासना का शाश्वत प्रतीक बन गए।\n\nयद्यपि श्रीकृष्ण कालान्तर में वृंदावन से मथुरा चले गए, परंतु उनका भौतिक विरह उनके आंतरिक बंधन को तनिक भी कम न कर सका। भक्ति परंपरा में उनका यह विरह ही प्रेम की पराकाष्ठा बन गया—जहाँ सच्चा आत्मिक संबंध दूरी, काल और भौतिक सीमाओं से परे चला जाता है।\n\nअतः उनकी प्रेमकथा केवल एक लौकिक कथा नहीं, बल्कि जीवात्मा और परमात्मा के उस दिव्य संबंध का प्रतीक है, जो सदा एकाकार होने को लालायित रहता है।"
    },
    "lessonHighlight": {
      "en": "True love is a connection of souls, not a claim of possession.",
      "hi": "सच्चा प्रेम आत्माओं का मिलन है, किसी पर अधिकार का दावा नहीं।"
    },
    "lesson": {
      "en": "Radha-Krishna teach us that the deepest love is built on devotion, trust and selflessness. Love does not always mean holding someone close; sometimes its greatest expression is to love without trying to possess.\n\nWhere there is true prema, distance may separate two people—but it cannot separate two hearts.",
      "hi": "राधा-कृष्ण हमें सिखाते हैं कि सबसे गहरा प्रेम समर्पण, विश्वास और निःस्वार्थता पर टिका होता है। प्रेम का अर्थ सदा किसी को बाँधकर रखना नहीं; कभी-कभी इसकी सबसे महान अभिव्यक्ति बिना अधिकार जताए प्रेम करते रहना है।\n\nजहाँ सच्चा प्रेम होता है, वहाँ भौगोलिक दूरी दो व्यक्तियों को अलग कर सकती है—परंतु दो हृदयों को कभी जुदा नहीं कर सकती।"
    }
  },
  {
    "id": 14,
    "theme": "courage",
    "slug": "kansa-vadha",
    "title": {
      "en": "Kansa Vadha",
      "hi": "कंस संहार"
    },
    "subtitle": {
      "en": "Krishna Defeats Kansa",
      "hi": "मथुरा में आततायी कंस का संहार एवं धर्म व न्याय की पुनर्स्थापना"
    },
    "about": {
      "en": "Years after sending countless demons to destroy Krishna, Kansa finally summoned Krishna and Balaram to Mathura, intending to kill them. Leaving behind the beloved people of Vrindavan, the brothers travelled to Mathura and entered Kansa’s arena.\n\nThere, Krishna and Balaram defeated the powerful wrestlers sent against them. Krishna then confronted Kansa himself. The tyrant who had imprisoned his own sister Devaki and Vasudeva and lived in fear of the prophecy was finally defeated by the very child he had tried so desperately to destroy.\n\nKrishna then freed Devaki and Vasudeva from imprisonment and restored Kansa’s father, Ugrasena, to the throne—bringing an end to years of fear and oppression in Mathura.\n\nThe prophecy made on the day of Krishna’s birth had finally been fulfilled.",
      "hi": "श्रीकृष्ण को समाप्त करने के लिए अनगिनत असुरों को भेजने के वर्षों बाद, कंस ने अंततः कृष्ण और बलराम को वध करने के उद्देश्य से मथुरा के धनुष-यज्ञ में आमंत्रित किया। वृंदावन के प्रियजनों को विदा कर दोनों भाई मथुरा पहुंचे और कंस की रंगशाला में प्रविष्ट हुए।\n\nवहाँ कृष्ण और बलराम ने कंस द्वारा भेजे गए कुवलयापीड़ हाथी और चाणूर-मुष्टिक जैसे महाबलशाली मल्लों को परास्त किया। तत्पश्चात श्रीकृष्ण ने सीधे कंस का सामना किया। अपनी ही बहन देवकी और वसुदेव को बंदी बनाने वाला और भविष्यवाणी के भय में जीने वाला वह आततायी अंततः उसी बालक के हाथों मारा गया जिसे वह समाप्त करना चाहता था।\n\nश्रीकृष्ण ने अपने माता-पिता देवकी और वसुदेव को कारागार के बंधनों से मुक्त किया और कंस के वृद्ध पिता उग्रसेन को पुनः मथुरा का सिंहासन सौंपा—जिससे वर्षों के भय और अत्याचार का अंत हुआ।\n\nश्रीकृष्ण के जन्मदिवस पर की गई आकाशवाणी पूर्ण हो चुकी थी।"
    },
    "lessonHighlight": {
      "en": "No power built on fear and injustice lasts forever.",
      "hi": "भय और अन्याय की नींव पर खड़ी कोई भी सत्ता सदा नहीं टिकती।"
    },
    "lesson": {
      "en": "Kansa Vadha reminds us that courage sometimes means standing up against what is wrong, even when the challenge seems powerful. Krishna’s victory was not for revenge or personal glory—it was to end oppression and restore justice.\n\nTrue power is not in controlling others, but in using our strength to protect what is right.",
      "hi": "कंस वध हमें स्मरण कराता है कि साहस का अर्थ है अन्याय के विरुद्ध आवाज उठाना, भले ही विरोधी कितना भी शक्तिशाली प्रतीत क्यों न हो। श्रीकृष्ण की यह विजय प्रतिशोध या व्यक्तिगत यश के लिए नहीं थी—बल्कि उत्पीड़न को समाप्त कर न्याय की पुनर्स्थापना के लिए थी।\n\nसच्ची शक्ति दूसरों को नियंत्रित करने में नहीं, अपितु अपनी सामर्थ्य का उपयोग सत्य और धर्म की रक्षा के लिए करने में है।"
    }
  },
  {
    "id": 15,
    "theme": "friendship",
    "slug": "pada-prakshalana",
    "title": {
      "en": "Pada Prakshalana",
      "hi": "पद प्रक्षालन"
    },
    "subtitle": {
      "en": "Krishna Welcomes Sudama",
      "hi": "दरिद्र सखा सुदामा के चरण पखारते द्वारकाधीश श्रीकृष्ण"
    },
    "about": {
      "en": "Years after studying together at Guru Sandipani’s ashram, Krishna had become the kingly lord of Dwarka, while his childhood friend Sudama lived a life of great simplicity and poverty.\n\nAt his wife’s urging, Sudama travelled to Dwarka to meet Krishna, carrying the only gift he could afford—a humble bundle of poha (flattened rice).\n\nThe moment Krishna saw his old friend, he rushed forward and embraced him with immense affection. He seated Sudama with honour and, despite all his royal grandeur, personally washed his friend’s feet. For Krishna, Sudama’s worn clothes and poverty meant nothing; before him stood the same beloved friend of his childhood.\n\nSudama could not bring himself to ask Krishna for financial help. Yet Krishna understood what remained unspoken and later blessed his friend with abundance.",
      "hi": "गुरु सांदीपनि के आश्रम में साथ अध्ययन करने के वर्षों बाद, श्रीकृष्ण द्वारका के चक्रवर्ती राजा बन चुके थे, जबकि उनके बाल-सखा सुदामा अत्यंत दरिद्रता और सादगी का जीवन जी रहे थे।\n\nअपनी धर्मपत्नी के आग्रह पर, सुदामा द्वारकाधीश से मिलने गए। भेंट के रूप में उनके पास केवल वही था जो वे जुटा सके—एक फटे वस्त्र में बँधे थोड़े से तंदुल या पोहा।\n\nजैसे ही श्रीकृष्ण ने अपने पुराने सखा को देखा, वे राजसिंहासन छोड़कर नंगे पाँव दौड़े और सुदामा को अश्रुपूरित नेत्रों से गले लगा लिया। उन्होंने सुदामा को स्वर्ण सिंहासन पर आदरपूर्वक बैठाया और अपने समस्त राजसी वैभव को विस्मृत कर, स्वयं परात में जल लेकर अपने अश्रुओं और जल से सखा के चरण पखारे। कृष्ण के लिए सुदामा के फटे वस्त्र और निर्धनता कोई अर्थ नहीं रखती थी; उनके सामने उनका वही प्रिय बाल-सखा खड़ा था।\n\nसुदामा संकोचवश अपनी आर्थिक विपन्नता के विषय में कुछ न मांग सके। परंतु अंतर्यामी प्रभु ने उनके अनकहे कष्ट को समझ लिया और बिना माँगे उन्हें अकूत संपदा और परमानंद से परिपूर्ण कर दिया।"
    },
    "lessonHighlight": {
      "en": "True greatness is measured by humility, not status.",
      "hi": "सच्ची महानता पद या प्रतिष्ठा से नहीं, बल्कि विनम्रता से मापी जाती है।"
    },
    "lesson": {
      "en": "Pada Prakshalana reminds us that wealth, position and success should never make us forget the people who walked beside us before we had them. Krishna had everything, yet he bowed to wash his friend’s feet.\n\nTrue friendship sees the person—not their wealth, status or circumstances.",
      "hi": "पाद प्रक्षालन हमें सिखाता है कि धन, पद और सफलता मिलने पर हमें कभी उन लोगों को नहीं भूलना चाहिए जो हमारे संघर्ष के दिनों में हमारे साथ चले थे। श्रीकृष्ण के पास समस्त ब्रह्मांड का ऐश्वर्य था, फिर भी वे अपने दरिद्र मित्र के चरण पखारने के लिए झुक गए।\n\nसच्ची मित्रता केवल व्यक्ति के हृदय को देखती है—उसकी संपत्ति, पद या परिस्थितियों को नहीं।"
    }
  },
  {
    "id": 16,
    "theme": "love",
    "slug": "kesh-prasadhana-shringar-leela",
    "title": {
      "en": "Kesh-Prasadhana / Shringar Leela",
      "hi": "केश-प्रसाधन व शृंगार लीला"
    },
    "subtitle": {
      "en": "Rukmini-Krishna Shringar Leela",
      "hi": "श्रीकृष्ण द्वारा प्रेमपूर्वक महारानी रुक्मिणी का केश-शृंगार व सेवा"
    },
    "about": {
      "en": "Among the tender Leelas of Rukmini and Krishna are moments of Shringar—adorning one another with affection. In Kesh-Prasadhana, Krishna lovingly arranges Rukmini’s hair, decorating it with fragrant flowers and ornaments.\n\nHere, the one worshipped by the entire world lovingly serves his beloved. The gesture is simple and intimate: Krishna’s attention is not on his own grandeur, but on bringing joy to Rukmini.\n\nThe Leela beautifully expresses the tenderness of Rukmini-Krishna prema, where love is shown not merely through words, but through care, attention and acts of service.",
      "hi": "रुक्मिणी और श्रीकृष्ण की सुकोमल लीलाओं में शृंगार के क्षण अनुपम हैं—जहाँ वे एक-दूसरे को अगाध स्नेह से सुसज्जित करते हैं। केश-प्रसाधन में, श्रीकृष्ण स्वयं अपने हाथों से महारानी रुक्मिणी के केश संवारते हैं और उन्हें सुगंधित पुष्पों व आभूषणों से सजाते हैं।\n\nयहाँ, जिनकी पूजा समस्त त्रिलोकी करती है, वे स्वयं अपनी प्रियतमा की प्रेममयी सेवा करते हैं। यह भाव अत्यंत सरल और आत्मीय है: प्रभु का ध्यान अपने ऐश्वर्य पर नहीं, अपितु रुक्मिणी जी के मुख पर आनंदमयी मुस्कान लाने पर है।\n\nयह लीला रुक्मिणी-कृष्ण प्रेम के उस कोमल स्वरूप को प्रकट करती है, जहाँ प्रेम केवल शब्दों में नहीं, बल्कि आत्मीय देखभाल, सम्मान और सेवा-भाव में अभिव्यक्त होता है।"
    },
    "lessonHighlight": {
      "en": "Love is not only something we feel; it is something we do.",
      "hi": "प्रेम केवल एक भावना नहीं; यह सेवा और कर्म में दिखने वाली अनुभूति है।"
    },
    "lesson": {
      "en": "Kesh-Prasadhana reminds us that the deepest relationships are nurtured through small acts of care, respect and attention. True love does not ask, “What will I receive?” but finds happiness in making the other person feel cherished, seen and loved.",
      "hi": "केश-प्रसाधन हमें स्मरण कराता है कि प्रगाढ़ संबंध परस्पर देखभाल, सम्मान और ध्यान के छोटे-छोटे कार्यों से ही सींचे जाते हैं। सच्चा प्रेम कभी यह नहीं पूछता, मुझे क्या मिलेगा? बल्कि वह इस बात में आनंद पाता है कि उसका प्रियजन स्वयं को सम्मानित, सुरक्षित और प्रेममय अनुभव करे।"
    }
  }
];

// 2. BILINGUAL UI TRANSLATIONS
const TRANSLATIONS = {
  hi: {
    shloka_nav: "॥ श्री कृष्णाय नमः ॥",
    nav_center_title: "कृष्ण लीलाएँ",
    brand_subtitle: "कृष्ण लीलाएँ",
    nav_home: "दर्शन",
    nav_stories: "कथाएँ",
    nav_lessons: "जीवन दर्शन",
    flute_btn: "बाँसुरी धुन",
    hero_title_1: "कृष्ण के अनेक रूप,",
    hero_title_2: "अनेक लीलाएँ और कथाएँ…",
    hero_intro_text: "किसी में प्रेम, किसी में मित्रता; कहीं साहस; और कभी जीवन की सहज सीख। आइए, कान्हा के इन दिव्य स्वरूपों और उनकी कहानियों को जानें।",
    hero_explore_btn: "पावन कथाएँ पढ़ें",
    hero_music_btn: "बाँसुरी की मधुर तान",
    stat_swaroops: "दिव्य कथाएँ",
    stat_themes: "जीवन सूत्र",
    stat_grace: "भगवद् कृपा",
    stat_grace_val: "अनंत",
    artwork_caption: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः",
    card_daily_wisdom: "गीता अमृत",
    shloka_verse: "“सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।<br>अहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥”",
    shloka_meaning: "“सब धर्मों को मुझमें समर्पित कर केवल मेरी शरण में आ जाओ; मैं तुम्हें समस्त बंधनों से मुक्त कर दूँगा।”",
    shloka_ref: "— श्रीमद्भगवद्गीता (१८.६६)",
    card_virtues_title: "हर लीला में एक दिव्य संदेश",
    v_love: "निश्छल प्रेम",
    v_love_desc: "नवनीत, कृष्ण-बलराम, रास व शृंगार लीला",
    v_friendship: "सच्ची मित्रता",
    v_friendship_desc: "माखन चोरी, कृष्णा की टोली व पद प्रक्षालन",
    v_courage: "धर्म-साहस",
    v_courage_desc: "कारागृह जन्म, यमुना तरण, पूतना व कंस संहार",
    v_wisdom: "दिव्य विवेक",
    v_wisdom_desc: "यमलार्जुन भंजन, गोवर्धन धारण व गोपी वस्त्रहरण",
    scroll_prompt: "लीलाओं में प्रवेश करें",
    wisdom_badge: "दैनिक जीवन में कृष्ण दर्शन",
    wisdom_heading: "कान्हा की लीलाओं से जीवन को सुंदर बनाने के ४ पावन सूत्र",
    wisdom_subheading: "चार दिव्य मार्ग जो कृष्ण की कथाओं को हमारे दैनिक जीवन, भावनाओं और चेतना से जोड़ते हैं।",
    cat_love_title: "निश्छल प्रेम",
    cat_love_desc: "माता यशोदा के वात्सल्य से लेकर श्रीराधा संग दिव्य महारास तक, कान्हा सिखाते हैं कि सच्चा प्रेम अधिकार जताने में नहीं, बल्कि निःस्वार्थ समर्पण, आत्मीय सेवा और निश्छल स्नेह में खिलता है।",
    cat_love_stories: "नवनीत भक्षण • कृष्ण-बलराम • रास लीला • राधा-कृष्ण • शृंगार लीला",
    cat_friendship_title: "सच्ची मित्रता",
    cat_friendship_desc: "गोकुल में सखाओं संग माखन बांटने और पतंग उड़ाने से लेकर राजसिंहासन छोड़ सुदामा के चरण पखारने तक, कान्हा का संदेश है कि सच्ची मित्रता में धन, पद और ऐश्वर्य का कोई भेद नहीं होता।",
    cat_friendship_stories: "माखन चोरी • कृष्णा की टोली • पद प्रक्षालन (सुदामा)",
    cat_courage_title: "धर्म-साहस",
    cat_courage_desc: "कंस के कारागार में आधी रात को प्राकट्य से लेकर उफनती यमुना और कालिया नाग के दमन तक, कान्हा सिखाते हैं कि धर्म के मार्ग पर विश्वास ही हमारे भय को असीम आत्मबल में बदल देता है।",
    cat_courage_stories: "कारागृह जन्म • यमुना तरण • पूतना वध • कालिया मर्दन • कंस संहार",
    cat_wisdom_title: "दिव्य विवेक",
    cat_wisdom_desc: "यमलार्जुन वृक्षों के अहंकार-मुक्ति से लेकर कनिष्ठिका पर गोवर्धन पर्वत धारण तक, कान्हा हमें सिखाते हैं कि बाह्य दंभ और कर्मकांडों से ऊपर उठकर प्रकृति का सम्मान और विनम्र समर्पण ही सच्ची प्रज्ञा है।",
    cat_wisdom_stories: "यमलार्जुन भंजन • गोवर्धन धारण • गोपी वस्त्रहरण",
    cat_explore_btn: "कथाएँ पढ़ें →",
    section_badge: "कान्हा की पावन कथाएँ",
    stories_heading: "हर कहानी में कृष्ण, और हर कृष्ण में एक सीख",
    stories_subheading: "कारागृह जन्म, यमुना तरण, माखन चोरी, गोवर्धन धारण, रास लीला और सुदामा स्वागत की पावन कथाएँ और उनसे मिलने वाली जीवनोपयोगी प्रेरणा।",
    filter_all: "सभी कथाएँ",
    filter_love: "प्रेम",
    filter_friendship: "मित्रता",
    filter_courage: "धर्म-साहस",
    filter_wisdom: "दिव्य विवेक",
    search_placeholder: "स्वरूप या कथा खोजें...",
    read_more_btn: "कथा पढ़ें →",
    lesson_tag: "जीवन की सीख:",
    darshan_caption: "दिव्य झाँकी",
    modal_about_heading: "पावन कथा",
    modal_lesson_heading: "जीवन की सीख",
    modal_benediction_text: "भगवान श्रीकृष्ण आपके जीवन को सदैव प्रेम, आनंद और प्रकाश से परिपूर्ण रखें।",
    listen_story_btn: "कथा सुनें",
    listening_active: "कथा वाचन जारी है...",
    audio_storyteller_desc: "भारतीय साधु वाणी व तानपुरा की पावन ध्वनि में कथावाचन",
    prev_story: "पिछली कथा",
    next_story: "अगली कथा",
    all_stories_btn: "सभी कथाएँ",
    view_all_stories: "सभी कथाएँ देखें",
    footer_title: "॥ श्री कृष्णाय नमः ॥",
    footer_quote: "“कृष्णं वन्दे जगद्गुरुम्” — अखिल ब्रह्मांड के सद्गुरु भगवान श्रीकृष्ण के पावन चरणों में कोटिशः प्रणाम।",
    copyright_text: "॥ जय श्री कृष्ण ॥ • A Divine Celebration of Krishna Leela & Swaroop Kathas"
  },
  en: {
    shloka_nav: "॥ Shree Krishnaya Namah ॥",
    nav_center_title: "Krishna Leelas",
    brand_subtitle: "Krishna Leelas",
    nav_home: "Darshan",
    nav_stories: "Stories",
    nav_lessons: "Life Lessons",
    flute_btn: "Divine Flute",
    hero_title_1: "Many Forms of Krishna,",
    hero_title_2: "Countless Leelas & Divine Tales…",
    hero_intro_text: "In one, love; in another, friendship; somewhere courage; and sometimes gentle lessons for life. Come, let us explore these divine swaroops of Kanha and his stories.",
    hero_explore_btn: "Explore Sacred Stories",
    hero_music_btn: "Sweet Flute Melody",
    stat_swaroops: "Sacred Stories",
    stat_themes: "Core Virtues",
    stat_grace: "Boundless Grace",
    stat_grace_val: "Infinite",
    artwork_caption: "Where there is Krishna, there is victory & righteousness",
    card_daily_wisdom: "Gita Nectar",
    shloka_verse: "“Abandon all varieties of righteousness and simply surrender unto Me alone.<br>I shall liberate you from all sins; do not grieve.”",
    shloka_meaning: "“Dedicate every duty to Me and take shelter in My grace; I will deliver you from all bondage.”",
    shloka_ref: "— Bhagavad Gita (18.66)",
    card_virtues_title: "A Timeless Message in Every Leela",
    v_love: "Unconditional Love",
    v_love_desc: "Navnit, Krishna Balaram, Raas & Shringar",
    v_friendship: "Pure Friendship",
    v_friendship_desc: "Makhan Chori, Krishna ki Toli & Sudama",
    v_courage: "Righteous Courage",
    v_courage_desc: "Karagrha Janma, Yamuna, Putana & Kansa",
    v_wisdom: "Divine Wisdom",
    v_wisdom_desc: "Yamalarjuna, Govardhan & Gopi Vastraharana",
    scroll_prompt: "Enter the Sacred Stories",
    wisdom_badge: "Living with Krishna's Wisdom",
    wisdom_heading: "Four Sacred Life Lessons from Krishna's Leelas",
    wisdom_subheading: "Four sacred paths connecting Krishna's stories to our everyday life, relationships, and spiritual awakening.",
    cat_love_title: "Unconditional Love",
    cat_love_desc: "From mother Yashoda feeding fresh butter to the transcendent Raas with Radha, Krishna reveals that true love demands nothing—it blossoms through selfless care, deep affection, and complete emotional surrender.",
    cat_love_stories: "Navnit Bhakshan • Krishna Balaram • Raas Leela • Radha-Krishna • Shringar Leela",
    cat_friendship_title: "Pure Friendship",
    cat_friendship_desc: "Whether stealing butter with village friends, flying kites under open skies, or washing Sudama's weary feet, Krishna shows that genuine camaraderie dissolves all boundaries of wealth, status, and pride.",
    cat_friendship_stories: "Makhan Chori • Krishna ki Toli • Pada Prakshalana (Sudama)",
    cat_courage_title: "Righteous Courage",
    cat_courage_desc: "From his midnight birth in Kansa's dungeon to subduing the venomous Kaliya, Krishna teaches us that courage is not the absence of fear, but the unwavering faith to step forward and defend truth against oppression.",
    cat_courage_stories: "Karagrha Janma • Yamuna Taran • Putana Vadha • Kaliya Mardhana • Kansa Vadha",
    cat_wisdom_title: "Divine Wisdom",
    cat_wisdom_desc: "By freeing the twin trees from pride, sheltering Vrindavan beneath Mount Govardhan, and revealing inner devotion in the Yamuna, Krishna reminds us to let go of outward ego and seek harmony with nature and spirit.",
    cat_wisdom_stories: "Yamalarjuna Bhanjana • Govardhan Dharan • Gopi Vastraharana",
    cat_explore_btn: "Explore Stories →",
    section_badge: "Sacred Stories of Kanha",
    stories_heading: "In Every Story Dwells Krishna, and in Every Form a Lesson",
    stories_subheading: "Sacred tales and practical life wisdom from the divine leelas of Lord Krishna, from his prison birth in Mathura to welcoming Sudama in Dwarka.",
    filter_all: "All Stories",
    filter_love: "Love",
    filter_friendship: "Friendship",
    filter_courage: "Righteous Courage",
    filter_wisdom: "Divine Wisdom",
    search_placeholder: "Search story or theme...",
    read_more_btn: "Read Story →",
    lesson_tag: "The Lesson:",
    darshan_caption: "Divine Darshan",
    modal_about_heading: "The Story",
    modal_lesson_heading: "The Lesson",
    modal_benediction_text: "May Lord Krishna always fill your life with love, joy and light.",
    listen_story_btn: "Listen Story",
    listening_active: "Narrating Katha...",
    audio_storyteller_desc: "Sacred narration with warm Indian voice & atmospheric Tanpura",
    prev_story: "Previous Story",
    next_story: "Next Story",
    all_stories_btn: "All Stories",
    view_all_stories: "View All Stories",
    footer_title: "॥ Shree Krishnaya Namah ॥",
    footer_quote: "“Krishnam Vande Jagadgurum” — Humble salutations at the lotus feet of Lord Krishna, the spiritual master of all creation.",
    copyright_text: "॥ Jai Shree Krishna ॥ • A Divine Celebration of Krishna Leela & Swaroop Kathas"
  }
};

// 3. APPLICATION STATE (Default Language is Hindi)
const state = {
  lang: localStorage.getItem('krishna_lang') || 'hi', // Hindi is default!
  activeFilter: 'all',
  searchQuery: '',
  isFlutePlaying: false,
  isNarrating: false,
  currentStoryId: 1
};

// Hindi vs English Numeral Converter
function formatNumber(num) {
  if (state.lang === 'en') {
    return num.toString(); // Strictly English 0-9
  }
  const hindiDigits = ['०','१','२','३','४','५','६','७','८','९'];
  return num.toString().split('').map(d => hindiDigits[parseInt(d, 10)] || d).join('');
}

function formatBadgeNumber(num) {
  const formatted = num < 10 ? '0' + num : num.toString();
  if (state.lang === 'en') {
    return formatted; // e.g. "01", "02"
  }
  const hindiDigits = ['०','१','२','३','४','५','६','७','८','९'];
  return formatted.split('').map(d => hindiDigits[parseInt(d, 10)] || d).join('');
}

// 4. DIVINE FLUTE AUDIO PLAYER (True Autoplay immediately on load)
let fluteAudio = null;

function initFluteAudio() {
  if (!fluteAudio) {
    fluteAudio = document.getElementById('bgFluteAudio');
    if (!fluteAudio) {
      fluteAudio = new Audio('assets/divine_flute.mp3');
      fluteAudio.id = 'bgFluteAudio';
      fluteAudio.loop = true;
      fluteAudio.preload = 'auto';
      document.body.appendChild(fluteAudio);
    }
    fluteAudio.volume = 0.35; // Gentle, soothing ambient volume

    // Restore playback position across in-domain page navigations
    const savedTime = sessionStorage.getItem('flute_playback_time');
    if (savedTime) {
      try { fluteAudio.currentTime = parseFloat(savedTime) || 0; } catch(e){}
    }

    fluteAudio.addEventListener('play', () => {
      state.isFlutePlaying = true;
      updateFluteButtons(true);
    });

    fluteAudio.addEventListener('pause', () => {
      state.isFlutePlaying = false;
      updateFluteButtons(false);
    });

    fluteAudio.addEventListener('ended', () => {
      state.isFlutePlaying = false;
      updateFluteButtons(false);
    });

    window.addEventListener('beforeunload', () => {
      if (fluteAudio) {
        sessionStorage.setItem('flute_playback_time', fluteAudio.currentTime);
        sessionStorage.setItem('flute_playing', state.isFlutePlaying ? 'true' : 'false');
      }
    });
  }
}

// True Autoplay: Attempts to start playing immediately on initial page load
function startAutoplayFlute() {
  initFluteAudio();
  if (!fluteAudio) return;

  // Immediate unmuted playback attempt
  const playPromise = fluteAudio.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      state.isFlutePlaying = true;
      updateFluteButtons(true);
    }).catch((err) => {
      // If the browser strictly restricts unmuted autoplay on initial visit:
      // Start playback immediately in muted mode (which browsers allow 100% of the time on load)
      fluteAudio.muted = true;
      fluteAudio.play().then(() => {
        state.isFlutePlaying = true;
        updateFluteButtons(true);
      }).catch(() => {});

      // Instantly restore sound on any natural user movement (scroll, pointer movement, or touch)
      // without requiring clicking a button or specific element!
      const unmuteEvents = ['pointerdown', 'touchstart', 'mousemove', 'scroll', 'wheel', 'keydown'];
      const unmuteHandler = () => {
        if (fluteAudio) {
          fluteAudio.muted = false;
          fluteAudio.volume = 0.35;
          if (fluteAudio.paused) {
            fluteAudio.play().catch(() => {});
          }
          state.isFlutePlaying = true;
          updateFluteButtons(true);
        }
        unmuteEvents.forEach(evt => window.removeEventListener(evt, unmuteHandler, { capture: true }));
      };

      unmuteEvents.forEach(evt => {
        window.addEventListener(evt, unmuteHandler, { capture: true, once: true, passive: true });
      });
    });
  }
}

function toggleBansuriMelody() {
  initFluteAudio();
  if (!fluteAudio) return;

  if (state.isFlutePlaying) {
    fluteAudio.pause();
  } else {
    fluteAudio.muted = false;
    fluteAudio.volume = 0.35;
    fluteAudio.play().catch(err => {
      console.warn("Flute play error:", err);
    });
  }
}

function updateFluteButtons(isPlaying) {
  const btn = document.getElementById('fluteAudioBtn');
  const quickBtn = document.getElementById('quickFluteBtn');
  const mobileFluteState = document.getElementById('mobileFluteState');
  if (btn) btn.classList.toggle('playing', isPlaying);
  if (quickBtn) quickBtn.classList.toggle('playing', isPlaying);
  if (mobileFluteState) {
    mobileFluteState.textContent = isPlaying ? 'ON' : 'OFF';
    mobileFluteState.style.color = isPlaying ? 'var(--color-gold-bright)' : 'var(--text-muted)';
  }
}

// 5. AUTHENTIC INDIAN SPIRITUAL STORYTELLER (Starts with "Shree Krishnaaya Namah" + Tanpura)
let tanpuraCtx = null;
let tanpuraOscs = [];
let tanpuraGains = [];
let isNarratingStory = false;
let narrationPhrases = [];
let currentPhraseIdx = 0;

function startTanpuraDrone() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!tanpuraCtx) tanpuraCtx = new AudioContext();
    if (tanpuraCtx.state === 'suspended') tanpuraCtx.resume();

    stopTanpuraDrone();

    const baseFreq = 138.59; // C#3 Sa
    const masterGain = tanpuraCtx.createGain();
    const now = tanpuraCtx.currentTime;
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.linearRampToValueAtTime(0.035, now + 1.2);

    const filter = tanpuraCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(420, now);

    const harmonics = [
      { f: baseFreq * 1.5, type: 'sine', vol: 0.02 },
      { f: baseFreq * 2.0, type: 'triangle', vol: 0.015 },
      { f: baseFreq * 2.003, type: 'sine', vol: 0.012 },
      { f: baseFreq, type: 'sine', vol: 0.028 }
    ];

    harmonics.forEach(h => {
      const osc = tanpuraCtx.createOscillator();
      const g = tanpuraCtx.createGain();
      osc.type = h.type;
      osc.frequency.setValueAtTime(h.f, now);
      g.gain.setValueAtTime(h.vol, now);
      osc.connect(g);
      g.connect(filter);
      osc.start(now);
      tanpuraOscs.push(osc);
      tanpuraGains.push(g);
    });

    filter.connect(masterGain);
    masterGain.connect(tanpuraCtx.destination);
    tanpuraGains.push(masterGain);
  } catch(e) {
    console.warn("Tanpura synth error:", e);
  }
}

function stopTanpuraDrone() {
  if (tanpuraGains.length > 0 && tanpuraCtx) {
    const master = tanpuraGains[tanpuraGains.length - 1];
    try { master.gain.linearRampToValueAtTime(0.001, tanpuraCtx.currentTime + 0.8); } catch(e){}
  }
  setTimeout(() => {
    tanpuraOscs.forEach(o => { try { o.stop(); } catch(e){} });
    tanpuraOscs = [];
    tanpuraGains = [];
  }, 900);
}

function getBestIndianVoice(lang) {
  if (!('speechSynthesis' in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const priorityNames = [
    'Microsoft Hemant - Hindi (India)',
    'Microsoft Hemant Online (Natural) - Hindi (India)',
    'Microsoft Madhur Online (Natural) - Hindi (India)',
    'Microsoft Madhur - Hindi (India)',
    'Microsoft Ravi Online (Natural) - English (India)',
    'Microsoft Ravi - English (India)',
    'Google हिन्दी',
    'Google Indian English',
    'Rishi',
    'Microsoft Kalpana - Hindi (India)',
    'Microsoft Neerja Online (Natural) - English (India)',
    'Swara',
    'Lekha'
  ];

  if (lang === 'hi') {
    for (const name of priorityNames) {
      const v = voices.find(vox => vox.name.toLowerCase().includes(name.toLowerCase()));
      if (v) return v;
    }
    return voices.find(v => v.lang.startsWith('hi')) || null;
  } else {
    for (const name of priorityNames) {
      const v = voices.find(vox => vox.name.toLowerCase().includes(name.toLowerCase()));
      if (v) return v;
    }
    return voices.find(v => v.lang === 'en-IN' || (v.lang.startsWith('en') && v.name.toLowerCase().includes('india'))) || voices[0] || null;
  }
}

// Begins with "Shree Krishnaaya Namah" naturally integrated!
function toggleStoryNarration(story) {
  if (!('speechSynthesis' in window)) {
    alert("Speech synthesis is not supported in this browser.");
    return;
  }

  if (isNarratingStory) {
    stopStoryNarration();
    return;
  }

  window.speechSynthesis.cancel();
  isNarratingStory = true;
  updateNarrationButtons(true);
  startTanpuraDrone();

  const lang = state.lang;
  const indianVoice = getBestIndianVoice(lang);

  // Every narration strictly begins with "Shree Krishnaaya Namah"
  const openingInvocation = lang === 'hi' 
    ? "॥ श्री कृष्णाय नमः ॥" 
    : "Shree Krishnaaya Namah.";

  const storyIntro = lang === 'hi'
    ? `आज की पावन कथा है, ${story.title[lang]}।`
    : `Today's sacred story is, ${story.title[lang]}.`;

  const rawAbout = story.about[lang].replace(/\n\n/g, '. ');
  const rawSentences = rawAbout.split(/[।.!?]+/).map(s => s.trim()).filter(s => s.length > 0);

  const lessonIntro = lang === 'hi'
    ? "इस लीला से हमारे जीवन की पावन सीख है:"
    : "The timeless lesson from this divine leela:";

  const rawLesson = story.lesson[lang].replace(/\n\n/g, '. ');
  const lessonSentences = rawLesson.split(/[।.!?]+/).map(s => s.trim()).filter(s => s.length > 0);

  narrationPhrases = [
    openingInvocation,
    storyIntro,
    ...rawSentences,
    lessonIntro,
    story.lessonHighlight[lang],
    ...lessonSentences,
    lang === 'hi' ? "॥ जय श्री कृष्ण ॥" : "Jai Shree Krishna."
  ];

  currentPhraseIdx = 0;

  function speakNext() {
    if (!isNarratingStory) return;

    if (currentPhraseIdx >= narrationPhrases.length) {
      stopStoryNarration();
      return;
    }

    const phrase = narrationPhrases[currentPhraseIdx];
    currentPhraseIdx++;

    const utterance = new SpeechSynthesisUtterance(phrase);
    if (indianVoice) utterance.voice = indianVoice;
    utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';

    // Warm, deep, unhurried elder satsang tempo
    utterance.pitch = lang === 'hi' ? 0.88 : 0.90;
    utterance.rate = lang === 'hi' ? 0.82 : 0.84;
    utterance.volume = 1.0;

    utterance.onend = () => {
      if (!isNarratingStory) return;
      const pauseTime = phrase.includes("Namah") || phrase.includes("नमः") || phrase.includes("सीख") || phrase.includes("lesson") ? 750 : 450;
      setTimeout(speakNext, pauseTime);
    };

    utterance.onerror = () => {
      if (isNarratingStory) setTimeout(speakNext, 300);
    };

    window.speechSynthesis.speak(utterance);
  }

  setTimeout(speakNext, 600);
}

function stopStoryNarration() {
  isNarratingStory = false;
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
  stopTanpuraDrone();
  updateNarrationButtons(false);
}

function updateNarrationButtons(isSpeaking) {
  const btn = document.getElementById('storyPageNarrateBtn');
  const icon = document.getElementById('narrateBtnIcon');
  const text = document.getElementById('narrateBtnText');
  if (!btn) return;

  btn.classList.toggle('speaking', isSpeaking);
  if (icon) icon.textContent = isSpeaking ? '⏹️' : '🔊';
  if (text) {
    text.textContent = isSpeaking 
      ? (state.lang === 'hi' ? 'कथा वाचन जारी है...' : 'Narrating Katha...')
      : (state.lang === 'hi' ? 'कथा सुनें' : 'Listen Story');
  }
}

// 6. RENDER HOMEPAGE STORIES GRID (Links directly to story.html?id=X)
function renderHomepageStories() {
  const grid = document.getElementById('storiesGrid');
  if (!grid) return;

  const lang = state.lang;
  const filtered = STORIES_DATA.filter(story => {
    if (state.activeFilter !== 'all' && story.theme !== state.activeFilter) {
      return false;
    }
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      const matchTitle = (story.title.en + " " + story.title.hi).toLowerCase().includes(q);
      const matchSub = (story.subtitle.en + " " + story.subtitle.hi).toLowerCase().includes(q);
      const matchAbout = (story.about.en + " " + story.about.hi).toLowerCase().includes(q);
      return matchTitle || matchSub || matchAbout;
    }
    return true;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.1rem; color: var(--text-ivory); margin-bottom: 0.5rem;">${lang === 'hi' ? 'कोई कथा नहीं मिली' : 'No stories found'}</p>
        <p style="font-size: 0.9rem;">${lang === 'hi' ? 'कृपया दूसरा शब्द खोजें या सभी कथाएँ देखें।' : 'Please search another keyword or view all stories.'}</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(story => {
    const themeName = TRANSLATIONS[lang]['cat_' + story.theme + '_title'] || story.theme;
    const numDisplay = formatBadgeNumber(story.id);

    return `
      <a href="story.html?id=${story.id}" class="story-card-link" title="${story.title[lang]}">
        <article class="story-card">
          <div>
            <div class="card-top-meta">
              <span class="card-number-badge">#${numDisplay}</span>
              <span class="card-theme-tag theme-tag-${story.theme}">${themeName}</span>
            </div>

            <div class="card-title-group">
              <h3>${story.title[lang]}</h3>
              <span class="card-title-en">${story.subtitle[lang]}</span>
            </div>

            <p class="card-story-preview">${story.about[lang].replace(/\n\n/g, ' ')}</p>
          </div>

          <div>
            <div class="card-lesson-highlight">
              <span class="lesson-badge-label">${TRANSLATIONS[lang].lesson_tag}</span>
              <p>${story.lessonHighlight[lang]}</p>
            </div>

            <div class="card-action-bar">
              <span class="card-read-btn">${TRANSLATIONS[lang].read_more_btn}</span>
            </div>
          </div>
        </article>
      </a>
    `;
  }).join('');
}

// 7. DEDICATED STORY WEBPAGE LOGIC (story.html)
function initStoryPage() {
  const mainTitle = document.getElementById('storyMainTitle');
  if (!mainTitle) return; // Not on story page

  const params = new URLSearchParams(window.location.search);
  const storyId = parseInt(params.get('id'), 10) || window.__STORY_ID__ || 1;
  state.currentStoryId = storyId;

  const story = STORIES_DATA.find(s => s.id === storyId) || STORIES_DATA[0];
  const lang = state.lang;

  // Title & Metadata
  document.title = `${story.title[lang]} | Krishna Leelas`;
  mainTitle.textContent = story.title[lang];
  document.getElementById('storyMainSubtitle').textContent = story.subtitle[lang];

  // Number Badge (Strict English digits in English mode)
  const numDisplay = formatBadgeNumber(story.id);
  document.getElementById('storyNumberBadge').textContent = lang === 'hi' ? `कथा #${numDisplay}` : `Story #${numDisplay}`;

  // Category Pill
  const categoryTitle = TRANSLATIONS[lang]['cat_' + story.theme + '_title'] || story.theme;
  const categoryPill = document.getElementById('storyCategoryPill');
  categoryPill.textContent = categoryTitle;
  categoryPill.className = `story-category-pill theme-tag-${story.theme}`;
  categoryPill.href = `category.html?theme=${story.theme}`;

  // Breadcrumb
  document.getElementById('breadcrumbCategory').textContent = categoryTitle;
  document.getElementById('breadcrumbTitle').textContent = story.title[lang];

  // 1:1 Image Placeholder
  const customImg = document.getElementById('storyCustomImg');
  const placeholderArt = document.getElementById('storyArtPlaceholder');
  if (story.image) {
    customImg.src = story.image;
    customImg.style.display = 'block';
    if (placeholderArt) placeholderArt.style.display = 'none';
  } else {
    customImg.src = '';
    customImg.style.display = 'none';
    if (placeholderArt) placeholderArt.style.display = 'flex';
  }

  // Story Paragraphs
  const paragraphsHtml = story.about[lang].split('\n\n').map(p => `<p>${p}</p>`).join('');
  document.getElementById('storyTextParagraphs').innerHTML = paragraphsHtml;

  // Lesson Card
  document.getElementById('storyLessonHighlight').textContent = story.lessonHighlight[lang];
  document.getElementById('storyLessonExplanation').innerHTML = story.lesson[lang].replace(/\n\n/g, '<br><br>');

  // Navigation Buttons
  const prevId = story.id === 1 ? STORIES_DATA.length : story.id - 1;
  const nextId = story.id === STORIES_DATA.length ? 1 : story.id + 1;
  document.getElementById('prevStoryPageBtn').href = `story.html?id=${prevId}`;
  document.getElementById('nextStoryPageBtn').href = `story.html?id=${nextId}`;

  // Lightbox Image expansion on 1:1 frame click
  const frameWrapper = document.getElementById('storyImageWrapper');
  if (frameWrapper) {
    frameWrapper.onclick = () => openLightbox(story);
  }

  // Audio Narrator
  const narrateBtn = document.getElementById('storyPageNarrateBtn');
  if (narrateBtn) {
    narrateBtn.onclick = () => toggleStoryNarration(story);
  }
}

// 8. DEDICATED CATEGORY WEBPAGE LOGIC (category.html)
function initCategoryPage() {
  const categoryTitleEl = document.getElementById('categoryPageTitle');
  if (!categoryTitleEl) return; // Not on category page

  const params = new URLSearchParams(window.location.search);
  const theme = params.get('theme') || 'love';
  const lang = state.lang;

  const validTheme = ['love', 'friendship', 'courage', 'wisdom'].includes(theme) ? theme : 'love';

  const icons = {
    love: '🪷',
    friendship: '🤝',
    courage: '🛡️',
    wisdom: '☀️'
  };

  const titleKey = 'cat_' + validTheme + '_title';
  const descKey = 'cat_' + validTheme + '_desc';

  document.title = `${TRANSLATIONS[lang][titleKey]} | Krishna Leelas`;
  categoryTitleEl.textContent = TRANSLATIONS[lang][titleKey];
  document.getElementById('categoryPageDesc').textContent = TRANSLATIONS[lang][descKey];
  document.getElementById('categoryIconGlyph').textContent = icons[validTheme] || '🪷';
  document.getElementById('categoryBreadcrumbTitle').textContent = TRANSLATIONS[lang][titleKey];

  // Active Tab Highlight
  ['Love', 'Friendship', 'Courage', 'Wisdom'].forEach(t => {
    const tabEl = document.getElementById('tab' + t);
    if (tabEl) {
      tabEl.classList.toggle('active', t.toLowerCase() === validTheme);
    }
  });

  // Render Category Stories
  const grid = document.getElementById('categoryStoriesGrid');
  const catStories = STORIES_DATA.filter(s => s.theme === validTheme);

  grid.innerHTML = catStories.map(story => {
    const themeName = TRANSLATIONS[lang]['cat_' + story.theme + '_title'] || story.theme;
    const numDisplay = formatBadgeNumber(story.id);

    return `
      <a href="story.html?id=${story.id}" class="story-card-link" title="${story.title[lang]}">
        <article class="story-card">
          <div>
            <div class="card-top-meta">
              <span class="card-number-badge">#${numDisplay}</span>
              <span class="card-theme-tag theme-tag-${story.theme}">${themeName}</span>
            </div>

            <div class="card-title-group">
              <h3>${story.title[lang]}</h3>
              <span class="card-title-en">${story.subtitle[lang]}</span>
            </div>

            <p class="card-story-preview">${story.about[lang].replace(/\n\n/g, ' ')}</p>
          </div>

          <div>
            <div class="card-lesson-highlight">
              <span class="lesson-badge-label">${TRANSLATIONS[lang].lesson_tag}</span>
              <p>${story.lessonHighlight[lang]}</p>
            </div>

            <div class="card-action-bar">
              <span class="card-read-btn">${TRANSLATIONS[lang].read_more_btn}</span>
            </div>
          </div>
        </article>
      </a>
    `;
  }).join('');
}

// 9. FULL-SCREEN LIGHTBOX VIEWER
function openLightbox(story) {
  const modal = document.getElementById('imageLightboxModal');
  if (!modal) return;

  const lang = state.lang;
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxPlaceholder = document.getElementById('lightboxPlaceholder');
  const caption = document.getElementById('lightboxCaption');

  caption.textContent = `${story.title[lang]} • ${TRANSLATIONS[lang].darshan_caption}`;

  if (story.image) {
    lightboxImg.src = story.image;
    lightboxImg.style.display = 'block';
    if (lightboxPlaceholder) lightboxPlaceholder.style.display = 'none';
  } else {
    lightboxImg.src = '';
    lightboxImg.style.display = 'none';
    if (lightboxPlaceholder) lightboxPlaceholder.style.display = 'flex';
  }

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  const modal = document.getElementById('imageLightboxModal');
  if (!modal) return;
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

// 10. BILINGUAL LANGUAGE CONTROLLER (Strict English Numerals in English Mode)
function switchLanguage(newLang) {
  state.lang = newLang;
  localStorage.setItem('krishna_lang', newLang);
  document.documentElement.setAttribute('lang', newLang);
  document.documentElement.setAttribute('data-lang', newLang);

  const hiTag = document.getElementById('langHi');
  const enTag = document.getElementById('langEn');
  if (hiTag && enTag) {
    hiTag.classList.toggle('active-lang', newLang === 'hi');
    enTag.classList.toggle('active-lang', newLang === 'en');
  }

  // Update text translations
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[newLang] && TRANSLATIONS[newLang][key]) {
      el.innerHTML = TRANSLATIONS[newLang][key];
    }
  });

  const placeholders = document.querySelectorAll('[data-i18n-placeholder]');
  placeholders.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (TRANSLATIONS[newLang] && TRANSLATIONS[newLang][key]) {
      el.setAttribute('placeholder', TRANSLATIONS[newLang][key]);
    }
  });

  // Update statistics values (Strict English digits 16, 4 in English mode)
  const statStories = document.querySelector('[data-stat="stories"]');
  if (statStories) statStories.textContent = formatNumber(16);

  const statThemes = document.querySelector('[data-stat="themes"]');
  if (statThemes) statThemes.textContent = formatNumber(4);

  // Re-render current page
  renderHomepageStories();
  initStoryPage();
  initCategoryPage();
}

// 11. AMBIENT BACKGROUND PARTICLES
function initAmbientCanvas() {
  const canvas = document.getElementById('ambientCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(width > 768 ? 55 : 22, 60);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedY: -(Math.random() * 0.35 + 0.12),
      speedX: (Math.random() - 0.5) * 0.2,
      opacity: Math.random() * 0.6 + 0.2,
      pulseSpeed: Math.random() * 0.02 + 0.008,
      colorType: Math.random() > 0.4 ? 'gold' : 'blue'
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);
    for (let p of particles) {
      p.y += p.speedY;
      p.x += p.speedX;
      p.opacity += Math.sin(Date.now() * p.pulseSpeed) * 0.005;

      if (p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
      if (p.x < -10) p.x = width + 10;
      if (p.x > width + 10) p.x = -10;

      const alpha = Math.max(0.1, Math.min(0.85, p.opacity));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);

      if (p.colorType === 'gold') {
        ctx.fillStyle = `rgba(246, 200, 103, ${alpha})`;
        ctx.shadowColor = 'rgba(246, 200, 103, 0.6)';
        ctx.shadowBlur = 8;
      } else {
        ctx.fillStyle = `rgba(125, 211, 252, ${alpha * 0.8})`;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.5)';
        ctx.shadowBlur = 6;
      }
      ctx.fill();
    }
    requestAnimationFrame(render);
  }
  render();
}

// 12. SETUP EVENT LISTENERS & INITIALIZATION

// Setup Mobile Hamburger Dropdown Menu
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const dropdownMenu = document.getElementById('mobileDropdownMenu');
  if (!menuBtn || !dropdownMenu) return;

  function toggleMenu() {
    const isOpen = dropdownMenu.classList.contains('open');
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    dropdownMenu.classList.add('open');
    menuBtn.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    dropdownMenu.setAttribute('aria-hidden', 'false');
  }

  function closeMenu() {
    dropdownMenu.classList.remove('open');
    menuBtn.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    dropdownMenu.setAttribute('aria-hidden', 'true');
  }

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  const mobileNavItems = dropdownMenu.querySelectorAll('.mobile-nav-item');
  mobileNavItems.forEach(item => {
    item.addEventListener('click', () => {
      closeMenu();
    });
  });

  document.addEventListener('click', (e) => {
    const header = document.querySelector('.site-header');
    if (header && !header.contains(e.target)) {
      closeMenu();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // Scrollspy to highlight active nav links
  window.addEventListener('scroll', () => {
    const sections = ['hero', 'stories', 'life-lessons'];
    const scrollPos = window.scrollY + 140;

    for (let id of sections) {
      const sec = document.getElementById(id);
      if (sec) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll('.desktop-nav-links .nav-link').forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href.endsWith('#' + id));
          });
          document.querySelectorAll('.mobile-dropdown-menu .mobile-nav-item').forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-nav') === id);
          });
          break;
        }
      }
    }
  }, { passive: true });
}

function setupGlobalEvents() {
  setupMobileMenu();
  const fluteBtn = document.getElementById('fluteAudioBtn');
  if (fluteBtn) fluteBtn.addEventListener('click', toggleBansuriMelody);

  const quickFluteBtn = document.getElementById('quickFluteBtn');
  if (quickFluteBtn) quickFluteBtn.addEventListener('click', toggleBansuriMelody);

  const langBtn = document.getElementById('langToggleBtn');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      const nextLang = state.lang === 'hi' ? 'en' : 'hi';
      switchLanguage(nextLang);
    });
  }

  // Header scroll shadow
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.site-header');
    if (header) {
      header.classList.toggle('scrolled', window.scrollY > 30);
    }
  });

  // Homepage filter tabs
  const filterTabs = document.querySelectorAll('.filter-tab[data-filter]');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      state.activeFilter = tab.getAttribute('data-filter');
      renderHomepageStories();
    });
  });

  // Search input
  const searchInput = document.getElementById('storySearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      if (clearBtn) clearBtn.classList.toggle('show', state.searchQuery.length > 0);
      renderHomepageStories();
    });
  }
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      state.searchQuery = '';
      clearBtn.classList.remove('show');
      renderHomepageStories();
    });
  }

  // Lightbox close events
  const closeLightboxBtn = document.getElementById('closeLightboxBtn');
  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);

  const lightboxModal = document.getElementById('imageLightboxModal');
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
}

// Initial Boot: Trigger Autoplay immediately on load
startAutoplayFlute();

document.addEventListener('DOMContentLoaded', () => {
  initAmbientCanvas();
  setupGlobalEvents();
  switchLanguage(state.lang); // Defaults to Hindi
  startAutoplayFlute(); // Ensures audio playback starts
  renderHomepageStories();
  initStoryPage();
  initCategoryPage();
});
