import { useState, useEffect, useRef } from "react";

const translations = {
  en: {
    nav: { home: "Home", about: "About", services: "Services", reviews: "Reviews", contact: "Contact" },
    hero: {
      tagline: "Precision. Compassion. Restoration.",
      title: "Dr. Raman Sharma",
      subtitle: "Senior Plastic, Cosmetic & Reconstructive Surgeon",
      hospital: "Sir Ganga Ram Hospital, New Delhi",
      cta1: "Book Consultation",
      cta2: "View Services",
    },
    stats: {
      s1: { num: "15+", label: "Years Experience", icon: "🏥" },
      s2: { num: "5000+", label: "Surgeries Performed", icon: "⚕" },
      s3: { num: "5.0", label: "Google Rating", icon: "⭐" },
      s4: { num: "PGIMER", label: "MCh Plastic Surgery", icon: "🎓" },
    },
    about: {
      badge: "About the Surgeon",
      title: "Trusted Expertise in Plastic & Reconstructive Surgery",
      p1: "Dr. Raman Sharma is a Senior Plastic, Cosmetic, and Reconstructive Surgeon at Sir Ganga Ram Hospital, New Delhi — one of India's most respected medical institutions.",
      p2: "With advanced training from PGIMER Chandigarh, MAMC Delhi, and UCMS Delhi, he brings precision and empathy to every procedure — from complex burn reconstruction and brachial plexus repair to refined cosmetic enhancements.",
      credentials: [
        "MCh Plastic Surgery — PGIMER, Chandigarh",
        "MS General Surgery — MAMC, Delhi",
        "MBBS — UCMS, Delhi",
      ],
    },
    whyChoose: {
      badge: "Why Patients Trust Us",
      title: "Exceptional Care at Every Step",
      items: [
        { icon: "🔬", title: "Advanced Techniques", desc: "Utilizing the latest microsurgical and minimally invasive techniques for optimal outcomes with faster recovery." },
        { icon: "🤝", title: "Personalized Approach", desc: "Every patient receives a customized treatment plan tailored to their unique anatomy, goals, and lifestyle." },
        { icon: "🏆", title: "Premier Institution", desc: "Operating at Sir Ganga Ram Hospital — one of India's top-ranked multi-specialty hospitals with world-class infrastructure." },
        { icon: "💬", title: "Transparent Communication", desc: "Honest consultations with realistic expectations, detailed explanations, and continuous post-operative support." },
        { icon: "🕐", title: "Comprehensive Follow-up", desc: "Dedicated post-surgery care with regular follow-ups to ensure smooth recovery and optimal results." },
        { icon: "📋", title: "Evidence-Based Practice", desc: "Treatment decisions guided by the latest research and international best practices in plastic surgery." },
      ],
    },
    services: {
      badge: "Specializations",
      title: "Comprehensive Surgical Care",
      list: [
        {
          icon: "✦",
          name: "Cosmetic Surgery",
          desc: "Rhinoplasty, facelifts, liposuction, body contouring, and breast surgeries tailored to your aesthetic goals.",
          procedures: ["Rhinoplasty", "Facelift", "Liposuction", "Abdominoplasty", "Breast Augmentation", "Breast Reduction"],
        },
        {
          icon: "⚕",
          name: "Reconstructive Surgery",
          desc: "Restoring form and function after trauma, tumour removal, or congenital conditions with advanced microsurgical techniques.",
          procedures: ["Cleft Lip & Palate", "Post-Trauma Reconstruction", "Tumour Excision", "Flap Surgery", "Microsurgery"],
        },
        {
          icon: "◈",
          name: "Burn Care & Reconstruction",
          desc: "Comprehensive acute burn management and reconstructive surgery for scar contractures, improving mobility and appearance.",
          procedures: ["Acute Burn Management", "Contracture Release", "Skin Grafting", "Post-Burn Rehabilitation"],
        },
        {
          icon: "⟡",
          name: "Hand & Brachial Plexus Surgery",
          desc: "Nerve repair, tendon reconstruction, and complex upper limb restoration for trauma and birth injuries.",
          procedures: ["Nerve Repair", "Tendon Transfer", "Brachial Plexus Repair", "Replantation Surgery"],
        },
        {
          icon: "◉",
          name: "Non-Surgical Treatments",
          desc: "Botox, dermal fillers, PRP therapy, laser treatments, and chemical peels for skin rejuvenation without surgery.",
          procedures: ["Botox", "Dermal Fillers", "PRP Therapy", "Laser Treatment", "Chemical Peels"],
        },
        {
          icon: "❋",
          name: "Scar Revision",
          desc: "Advanced techniques to minimize the appearance of scars from injuries, surgeries, or acne for improved confidence.",
          procedures: ["Surgical Revision", "Laser Resurfacing", "Steroid Injections", "Silicone Therapy"],
        },
      ],
    },
    procedures: {
      badge: "Popular Procedures",
      title: "Procedures That Transform Lives",
      list: [
        {
          name: "Rhinoplasty",
          desc: "Reshape and refine the nose for improved aesthetics and breathing. One of the most sought-after facial procedures.",
          duration: "2-3 hours",
          recovery: "1-2 weeks",
        },
        {
          name: "Liposuction",
          desc: "Remove stubborn fat deposits to sculpt and contour your body with precision for a more defined silhouette.",
          duration: "1-3 hours",
          recovery: "1-2 weeks",
        },
        {
          name: "Burn Reconstruction",
          desc: "Restore mobility and appearance after burn injuries through advanced surgical techniques and skin grafting.",
          duration: "Varies",
          recovery: "2-6 weeks",
        },
        {
          name: "Brachial Plexus Repair",
          desc: "Restore function to paralyzed arms through complex nerve surgery — a highly specialized procedure.",
          duration: "4-8 hours",
          recovery: "3-6 months",
        },
      ],
    },
    reviews: {
      badge: "Patient Stories",
      title: "What Our Patients Say",
      list: [
        {
          name: "Vaishali Sahu",
          text: "The Doctor made me feel very comfortable throughout — from consultation to the operation theatre. I am recovering well and am very happy to have found a care physician I can trust.",
          procedure: "Reconstructive Surgery",
        },
        {
          name: "Ayan Nafees",
          text: "Dr. Sharma's calm and reassuring approach gave us confidence from the very beginning. My father is recovering well, all thanks to Dr. Sharma's skill and dedication.",
          procedure: "Burn Injury Surgery",
        },
        {
          name: "Mohanasakthivel J",
          text: "Dr. Sharma maintained constant communication, ensuring I felt supported every step of the way. Thanks to his expertise and compassionate care, I recovered within just one and a half months.",
          procedure: "Emergency Care",
        },
        {
          name: "Rajesh Kumar",
          text: "I was extremely nervous about my surgery, but Dr. Sharma explained everything so clearly that I felt at ease. The results exceeded my expectations. Highly recommend!",
          procedure: "Cosmetic Surgery",
        },
        {
          name: "Priya Mehta",
          text: "After my accident, I thought I'd never feel normal again. Dr. Sharma's reconstructive work has been nothing short of miraculous. Forever grateful.",
          procedure: "Post-Trauma Reconstruction",
        },
        {
          name: "Sunil Verma",
          text: "The entire team at Sir Ganga Ram Hospital was exceptional. Dr. Sharma's attention to detail and genuine care for his patients makes him stand out. Outstanding experience.",
          procedure: "Hand Surgery",
        },
      ],
    },
    faq: {
      badge: "Common Questions",
      title: "Frequently Asked Questions",
      list: [
        {
          q: "How do I schedule a consultation with Dr. Sharma?",
          a: "You can call us directly at +91 98912 80450 to schedule an appointment. Consultations are available at Sir Ganga Ram Hospital, New Delhi. You can also use our AI chat assistant for quick queries.",
        },
        {
          q: "What should I expect during my first consultation?",
          a: "During your first visit, Dr. Sharma will discuss your concerns, examine the area of interest, explain available options, and help you understand what results to expect. He believes in transparent, honest communication.",
        },
        {
          q: "Are cosmetic procedures safe?",
          a: "When performed by a qualified and experienced plastic surgeon at an accredited facility like Sir Ganga Ram Hospital, cosmetic procedures are very safe. Dr. Sharma will discuss all risks and benefits during your consultation.",
        },
        {
          q: "What is the recovery time for most surgeries?",
          a: "Recovery varies by procedure. Minor procedures may require a few days, while complex reconstructive surgeries may need several weeks. Dr. Sharma provides detailed recovery plans for each patient.",
        },
        {
          q: "Does Dr. Sharma perform non-surgical treatments?",
          a: "Yes. Dr. Sharma offers a range of non-surgical options including Botox, dermal fillers, PRP therapy, laser treatments, and chemical peels for those who prefer minimally invasive approaches.",
        },
        {
          q: "Is financing or insurance accepted?",
          a: "Sir Ganga Ram Hospital accepts various insurance plans. For cosmetic procedures, flexible payment options may be available. Please call our clinic for specific insurance and payment inquiries.",
        },
      ],
    },
    clinic: {
      badge: "Visit Us",
      title: "Clinic Information",
      address: "Sir Ganga Ram Hospital, Old Rajinder Nagar, New Delhi - 110060",
      phone: "+91 98912 80450",
      email: "Contact via Phone",
      hours: [
        { day: "Monday - Friday", time: "10:00 AM - 4:00 PM" },
        { day: "Saturday", time: "10:00 AM - 2:00 PM" },
        { day: "Sunday", time: "Closed" },
      ],
      directions: "Located in the heart of New Delhi, Sir Ganga Ram Hospital is easily accessible by metro (Rajendra Place Station) and major road networks.",
    },
    insights: {
      badge: "Patient Education",
      title: "Insights & Guidance",
      list: [
        {
          title: "Liposuction vs. Tummy Tuck: Which Is Right for You?",
          excerpt: "Understanding the key differences between liposuction and abdominoplasty to make an informed decision about body contouring.",
          tag: "Cosmetic",
          image: "/images/image-1.png",
          content: `When considering body contouring, two of the most popular procedures are liposuction and abdominoplasty (tummy tuck). While both aim to improve your body's shape, they address different concerns and are suited for different patients.

**What Is Liposuction?**

Liposuction is a minimally invasive procedure designed to remove localized fat deposits that resist diet and exercise. It works best for patients who are near their ideal body weight but have stubborn pockets of fat in areas like the abdomen, flanks, thighs, or arms. During the procedure, a thin tube called a cannula is inserted through small incisions to suction out fat cells.

The key advantage of liposuction is its versatility — it can target almost any area of the body. Recovery is relatively quick, with most patients returning to normal activities within 1–2 weeks.

**What Is a Tummy Tuck?**

An abdominoplasty, or tummy tuck, is a more comprehensive procedure that removes excess skin and fat from the abdomen while also tightening the underlying abdominal muscles. It is particularly beneficial for patients who have experienced significant weight loss, pregnancy, or aging that has resulted in loose, sagging skin.

Unlike liposuction, a tummy tuck addresses both fat and skin laxity, making it the better choice for patients with stretched abdominal muscles (diastasis recti) or significant skin excess.

**Which Is Right for You?**

The decision between liposuction and a tummy tuck depends on several factors:

- **Skin elasticity**: If your skin has good elasticity and will contract after fat removal, liposuction may be sufficient. If you have loose, hanging skin, a tummy tuck is more appropriate.
- **Muscle tone**: If your abdominal muscles are separated or weakened (common after pregnancy), a tummy tuck can repair them. Liposuction cannot address this issue.
- **Recovery time**: Liposuction has a shorter recovery period (1–2 weeks) compared to a tummy tuck (3–4 weeks).
- **Scarring**: Liposuction involves very small incisions, while a tummy tuck leaves a longer scar along the lower abdomen, though it is typically hidden by underwear.

**Can They Be Combined?**

Yes. Many patients benefit from combining both procedures, often referred to as a "lipo-abdominoplasty." This approach removes fat, tightens muscles, and eliminates excess skin in a single surgery for comprehensive results.

**Consultation Is Key**

During your consultation, Dr. Sharma will carefully assess your anatomy, discuss your goals, and recommend the most suitable approach. Every patient is unique, and the best procedure — or combination of procedures — depends on your individual circumstances.

If you're considering body contouring, schedule a consultation to explore your options and understand what results you can realistically expect.`,
        },
        {
          title: "Understanding Burn Reconstruction: A Patient's Guide",
          excerpt: "Learn about the stages of burn reconstruction, from initial treatment to long-term recovery and scar management.",
          tag: "Reconstructive",
          image: "/images/image-3.png",
          content: `Burn injuries can be among the most devastating traumas a person can experience. Beyond the immediate pain, burns often leave lasting scars that affect both function and appearance. Understanding the journey of burn reconstruction can help patients and families know what to expect and feel empowered throughout the recovery process.

**The Stages of Burn Care**

Burn treatment is typically divided into three phases: acute care, surgical reconstruction, and long-term rehabilitation.

*Acute Care (Emergency Phase)*

The first priority after a burn injury is stabilizing the patient and preventing infection. This phase involves wound cleaning, fluid resuscitation, pain management, and initial wound coverage. For severe burns, this may require hospitalization in a specialized burn unit.

At Sir Ganga Ram Hospital, our burn care team provides comprehensive acute management, working to preserve as much healthy tissue as possible and prepare the wounds for reconstruction.

*Surgical Reconstruction*

Once the initial wounds have stabilized, reconstructive surgery begins. The goals of reconstruction are to:

- Restore function to affected areas (particularly hands, face, and joints)
- Release scar contractures that restrict movement
- Improve appearance and reduce visible scarring
- Address any deformities caused by the burn

Common reconstructive techniques include:

- **Skin grafting**: Transplanting healthy skin from an uninjured area to cover the burn wound
- **Flap surgery**: Moving tissue with its blood supply intact to cover complex wounds
- **Contracture release**: Surgically releasing tight scar bands that restrict joint movement
- **Tissue expansion**: Gradually stretching healthy skin near the burn site to generate extra skin for coverage

*Long-Term Rehabilitation*

Recovery from burn injuries is a marathon, not a sprint. Long-term rehabilitation may include:

- Physical therapy to maintain range of motion and prevent contractures
- Pressure garment therapy to flatten and soften scars
- Silicone-based treatments for scar management
- Laser therapy to improve scar texture and color
- Additional surgeries as the body grows or changes (especially important for children)

**When to Seek Reconstruction**

Some patients may need reconstruction immediately after their initial burn treatment, while others may benefit from waiting until scars have fully matured (typically 12–18 months after injury). Timing depends on the severity and location of the burn, as well as the patient's overall health.

**The Emotional Journey**

Burn recovery is not just physical — it is deeply emotional. Many patients experience anxiety, depression, or difficulties with self-image. A comprehensive care approach addresses these psychological aspects alongside physical rehabilitation.

**Moving Forward**

Every burn reconstruction journey is unique. Dr. Sharma works closely with each patient to develop a personalized treatment plan that addresses their specific needs and goals. Whether you are dealing with a recent burn injury or scars from years ago, modern reconstructive techniques can significantly improve both function and appearance.

If you or a loved one has experienced a burn injury, we encourage you to schedule a consultation to discuss your options.`,
        },
        {
          title: "PRP Therapy: How Your Own Blood Can Rejuvenate Skin",
          excerpt: "Discover how Platelet-Rich Plasma therapy stimulates collagen production for natural-looking skin rejuvenation.",
          tag: "Non-Surgical",
          image: "/images/Image-2.png",
          content: `Platelet-Rich Plasma (PRP) therapy has emerged as one of the most exciting developments in non-surgical skin rejuvenation. Using your body's own healing mechanisms, PRP stimulates collagen production and tissue regeneration for naturally youthful-looking skin — without surgery, synthetic fillers, or prolonged downtime.

**What Is PRP Therapy?**

PRP therapy involves drawing a small amount of your blood (similar to a routine blood test), processing it in a centrifuge to concentrate the platelets and growth factors, and then injecting this concentrated plasma into the treatment area.

Platelets contain powerful growth factors that play a crucial role in tissue healing and regeneration. When concentrated and applied to the skin, these growth factors:

- Stimulate collagen and elastin production
- Promote new blood vessel formation
- Accelerate tissue repair and cell turnover
- Improve skin texture, tone, and elasticity

**What Can PRP Treat?**

PRP therapy is versatile and can address a range of concerns:

- **Fine lines and wrinkles**: PRP stimulates collagen production to plump and smooth the skin naturally
- **Uneven skin tone**: Growth factors help even out pigmentation and improve overall complexion
- **Acne scars**: PRP promotes healing and collagen remodeling in scarred tissue
- **Under-eye dark circles and hollowing**: PRP can improve skin quality in this delicate area
- **Hair thinning**: When injected into the scalp, PRP can stimulate dormant hair follicles and promote thicker hair growth
- **Post-surgical healing**: PRP can accelerate recovery and improve scar quality after procedures

**The PRP Procedure**

A typical PRP session takes about 45–60 minutes:

1. **Blood draw**: A small amount of blood (about 15–30 ml) is drawn from your arm
2. **Processing**: The blood is placed in a centrifuge for 10–15 minutes to separate and concentrate the platelet-rich plasma
3. **Preparation**: The treatment area is cleansed and a topical numbing cream is applied for comfort
4. **Application**: The PRP is injected into the treatment area using fine needles, or applied topically after microneedling

Most patients describe the sensation as mild discomfort rather than pain. The procedure requires no general anesthesia and you can return to most normal activities the same day.

**What Results Can You Expect?**

PRP results develop gradually as your body produces new collagen:

- **1–2 weeks**: Initial improvement in skin hydration and glow
- **1–3 months**: Noticeable improvement in texture, fine lines, and skin quality
- **3–6 months**: Full results as collagen remodeling continues

Most patients benefit from a series of 3–4 treatments spaced 4–6 weeks apart, followed by maintenance sessions every 6–12 months.

**Why Choose PRP?**

The biggest advantage of PRP is that it uses your own biological material — there is no risk of allergic reaction or rejection. It works with your body's natural healing processes rather than introducing foreign substances.

PRP is also an excellent complement to other treatments. It can be combined with microneedling, laser therapy, or dermal fillers for enhanced results.

**Is PRP Right for You?**

PRP therapy is suitable for most adults who want to improve their skin quality naturally. It is particularly appealing for patients who prefer a gradual, natural-looking improvement over dramatic changes.

During your consultation, Dr. Sharma will assess your skin concerns, discuss your goals, and determine whether PRP — alone or in combination with other treatments — is the best approach for you.`,
        },
      ],
    },
    cta: {
      title: "Ready to Take the Next Step?",
      desc: "Schedule a confidential consultation with Dr. Raman Sharma to discuss your goals and explore your options.",
      button: "Book Your Consultation",
      phone: "Call: +91 98912 80450",
    },
    footer: {
      tagline: "Precision. Compassion. Restoration.",
      location: "Sir Ganga Ram Hospital, Old Rajinder Nagar, New Delhi - 110060",
      rights: "© 2026 Dr. Raman Sharma. All rights reserved.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      followUs: "Follow Us",
    },
  },
  hi: {
    nav: { home: "होम", about: "परिचय", services: "सेवाएं", reviews: "समीक्षाएं", contact: "संपर्क" },
    hero: {
      tagline: "सटीकता। करुणा। पुनर्स्थापना।",
      title: "डॉ. रमन शर्मा",
      subtitle: "वरिष्ठ प्लास्टिक, कॉस्मेटिक एवं पुनर्निर्माण सर्जन",
      hospital: "सर गंगा राम हॉस्पिटल, नई दिल्ली",
      cta1: "परामर्श बुक करें",
      cta2: "सेवाएं देखें",
    },
    stats: {
      s1: { num: "15+", label: "वर्षों का अनुभव", icon: "🏥" },
      s2: { num: "5000+", label: "सर्जरी की गईं", icon: "⚕" },
      s3: { num: "5.0", label: "गूगल रेटिंग", icon: "⭐" },
      s4: { num: "PGIMER", label: "MCh प्लास्टिक सर्जरी", icon: "🎓" },
    },
    about: {
      badge: "सर्जन के बारे में",
      title: "प्लास्टिक एवं पुनर्निर्माण सर्जरी में विश्वसनीय विशेषज्ञता",
      p1: "डॉ. रमन शर्मा सर गंगा राम हॉस्पिटल, नई दिल्ली में वरिष्ठ प्लास्टिक, कॉस्मेटिक और पुनर्निर्माण सर्जन हैं — जो भारत के सबसे प्रतिष्ठित चिकित्सा संस्थानों में से एक है।",
      p2: "PGIMER चंडीगढ़, MAMC दिल्ली और UCMS दिल्ली से उन्नत प्रशिक्षण के साथ, वे हर प्रक्रिया में सटीकता और सहानुभूति लाते हैं।",
      credentials: [
        "MCh प्लास्टिक सर्जरी — PGIMER, चंडीगढ़",
        "MS जनरल सर्जरी — MAMC, दिल्ली",
        "MBBS — UCMS, दिल्ली",
      ],
    },
    whyChoose: {
      badge: "मरीज़ हम पर क्यों भरोसा करते हैं",
      title: "हर कदम पर असाधारण देखभाल",
      items: [
        { icon: "🔬", title: "उन्नत तकनीकें", desc: "तेज़ रिकवरी के साथ सर्वोत्तम परिणामों के लिए नवीनतम माइक्रोसर्जिकल तकनीकों का उपयोग।" },
        { icon: "🤝", title: "व्यक्तिगत दृष्टिकोण", desc: "हर मरीज़ को उनकी अनूठी ज़रूरतों के अनुसार अनुकूलित उपचार योजना मिलती है।" },
        { icon: "🏆", title: "प्रमुख संस्थान", desc: "सर गंगा राम हॉस्पिटल — भारत के शीर्ष मल्टी-स्पेशियलिटी अस्पतालों में से एक।" },
        { icon: "💬", title: "पारदर्शी संवाद", desc: "यथार्थवादी अपेक्षाओं और निरंतर पोस्ट-ऑपरेटिव सहायता के साथ ईमानदार परामर्श।" },
        { icon: "🕐", title: "व्यापक फ़ॉलो-अप", desc: "सुचारू रिकवरी सुनिश्चित करने के लिए नियमित फ़ॉलो-अप के साथ समर्पित पोस्ट-सर्जरी देखभाल।" },
        { icon: "📋", title: "साक्ष्य-आधारित अभ्यास", desc: "नवीनतम शोध और अंतरराष्ट्रीय सर्वोत्तम प्रथाओं द्वारा निर्देशित उपचार निर्णय।" },
      ],
    },
    services: {
      badge: "विशेषज्ञता",
      title: "व्यापक शल्य चिकित्सा देखभाल",
      list: [
        { icon: "✦", name: "कॉस्मेटिक सर्जरी", desc: "राइनोप्लास्टी, फेसलिफ्ट, लिपोसक्शन, बॉडी कॉन्टूरिंग और ब्रेस्ट सर्जरी।", procedures: ["राइनोप्लास्टी", "फेसलिफ्ट", "लिपोसक्शन", "एब्डोमिनोप्लास्टी", "ब्रेस्ट ऑगमेंटेशन", "ब्रेस्ट रिडक्शन"] },
        { icon: "⚕", name: "पुनर्निर्माण सर्जरी", desc: "आघात, ट्यूमर या जन्मजात स्थितियों के बाद रूप और कार्य की बहाली।", procedures: ["क्लेफ्ट लिप और पैलेट", "पोस्ट-ट्रॉमा रिकंस्ट्रक्शन", "ट्यूमर एक्सिज़न", "फ्लैप सर्जरी", "माइक्रोसर्जरी"] },
        { icon: "◈", name: "बर्न केयर एवं पुनर्निर्माण", desc: "जलने की चोटों का व्यापक प्रबंधन और निशान संकुचन के लिए पुनर्निर्माण सर्जरी।", procedures: ["एक्यूट बर्न मैनेजमेंट", "कॉन्ट्रैक्चर रिलीज़", "स्किन ग्राफ्टिंग", "पोस्ट-बर्न रिहैबिलिटेशन"] },
        { icon: "⟡", name: "हैंड एवं ब्रेकियल प्लेक्सस सर्जरी", desc: "तंत्रिका मरम्मत, टेंडन पुनर्निर्माण और जटिल ऊपरी अंग बहाली।", procedures: ["नर्व रिपेयर", "टेंडन ट्रांसफर", "ब्रेकियल प्लेक्सस रिपेयर", "रीप्लांटेशन सर्जरी"] },
        { icon: "◉", name: "नॉन-सर्जिकल ट्रीटमेंट", desc: "बोटॉक्स, डर्मल फिलर्स, PRP थेरेपी, लेज़र ट्रीटमेंट।", procedures: ["बोटॉक्स", "डर्मल फिलर्स", "PRP थेरेपी", "लेज़र ट्रीटमेंट", "केमिकल पील्स"] },
        { icon: "❋", name: "स्कार रिवीज़न", desc: "चोट, सर्जरी या एक्ने के निशानों को कम करने की उन्नत तकनीकें।", procedures: ["सर्जिकल रिवीज़न", "लेज़र रिसर्फेसिंग", "स्टेरॉइड इंजेक्शन", "सिलिकॉन थेरेपी"] },
      ],
    },
    procedures: {
      badge: "लोकप्रिय प्रक्रियाएं",
      title: "जीवन बदलने वाली प्रक्रियाएं",
      list: [
        { name: "राइनोप्लास्टी", desc: "बेहतर सौंदर्य और श्वास के लिए नाक को फिर से आकार दें।", duration: "2-3 घंटे", recovery: "1-2 सप्ताह" },
        { name: "लिपोसक्शन", desc: "अधिक परिभाषित सिल्हूट के लिए जिद्दी वसा जमा को हटाएं।", duration: "1-3 घंटे", recovery: "1-2 सप्ताह" },
        { name: "बर्न रिकंस्ट्रक्शन", desc: "उन्नत सर्जिकल तकनीकों के माध्यम से जलने की चोटों के बाद गतिशीलता और रूप बहाल करें।", duration: "भिन्न", recovery: "2-6 सप्ताह" },
        { name: "ब्रेकियल प्लेक्सस रिपेयर", desc: "जटिल तंत्रिका सर्जरी के माध्यम से लकवाग्रस्त भुजाओं का कार्य बहाल करें।", duration: "4-8 घंटे", recovery: "3-6 महीने" },
      ],
    },
    reviews: {
      badge: "मरीज़ों की कहानियां",
      title: "हमारे मरीज़ क्या कहते हैं",
      list: [
        { name: "वैशाली साहू", text: "डॉक्टर ने मुझे पूरी प्रक्रिया में बहुत सहज महसूस कराया। मैं अच्छे से ठीक हो रही हूं।", procedure: "पुनर्निर्माण सर्जरी" },
        { name: "अयान नफ़ीस", text: "डॉ. शर्मा के शांत और आश्वस्त करने वाले दृष्टिकोण ने हमें शुरू से ही विश्वास दिलाया।", procedure: "बर्न इंजरी सर्जरी" },
        { name: "मोहनसक्तिवेल जे", text: "डॉ. शर्मा ने लगातार संवाद बनाए रखा। उनकी विशेषज्ञता की बदौलत मैं डेढ़ महीने में ठीक हो गया।", procedure: "इमरजेंसी केयर" },
        { name: "राजेश कुमार", text: "मैं अपनी सर्जरी को लेकर बहुत घबराया हुआ था, लेकिन डॉ. शर्मा ने सब कुछ इतना स्पष्ट रूप से समझाया कि मैं सहज हो गया।", procedure: "कॉस्मेटिक सर्जरी" },
        { name: "प्रिया मेहता", text: "मेरी दुर्घटना के बाद, मुझे लगा कि मैं कभी सामान्य महसूस नहीं करूंगी। डॉ. शर्मा का काम चमत्कारी रहा।", procedure: "पोस्ट-ट्रॉमा रिकंस्ट्रक्शन" },
        { name: "सुनील वर्मा", text: "सर गंगा राम हॉस्पिटल की पूरी टीम असाधारण थी। डॉ. शर्मा का ध्यान और देखभाल उन्हें अलग बनाती है।", procedure: "हैंड सर्जरी" },
      ],
    },
    faq: {
      badge: "सामान्य प्रश्न",
      title: "अक्सर पूछे जाने वाले प्रश्न",
      list: [
        { q: "डॉ. शर्मा से परामर्श कैसे बुक करें?", a: "अपॉइंटमेंट बुक करने के लिए +91 98912 80450 पर कॉल करें। परामर्श सर गंगा राम हॉस्पिटल, नई दिल्ली में उपलब्ध हैं।" },
        { q: "पहली मुलाकात में क्या उम्मीद करें?", a: "पहली मुलाकात में डॉ. शर्मा आपकी चिंताओं पर चर्चा करेंगे, जांच करेंगे, और उपलब्ध विकल्पों की व्याख्या करेंगे।" },
        { q: "क्या कॉस्मेटिक प्रक्रियाएं सुरक्षित हैं?", a: "सर गंगा राम हॉस्पिटल जैसी मान्यता प्राप्त सुविधा में योग्य सर्जन द्वारा की जाने पर कॉस्मेटिक प्रक्रियाएं बहुत सुरक्षित हैं।" },
        { q: "रिकवरी में कितना समय लगता है?", a: "रिकवरी प्रक्रिया के अनुसार भिन्न होती है। छोटी प्रक्रियाओं में कुछ दिन, जबकि जटिल सर्जरी में कई सप्ताह लग सकते हैं।" },
        { q: "क्या नॉन-सर्जिकल ट्रीटमेंट उपलब्ध हैं?", a: "हां, बोटॉक्स, डर्मल फिलर्स, PRP थेरेपी, लेज़र ट्रीटमेंट और केमिकल पील्स उपलब्ध हैं।" },
        { q: "क्या बीमा स्वीकार किया जाता है?", a: "सर गंगा राम हॉस्पिटल विभिन्न बीमा योजनाएं स्वीकार करता है। विशिष्ट जानकारी के लिए कृपया क्लिनिक से संपर्क करें।" },
      ],
    },
    clinic: {
      badge: "हमसे मिलें",
      title: "क्लिनिक की जानकारी",
      address: "सर गंगा राम हॉस्पिटल, ओल्ड राजिंदर नगर, नई दिल्ली - 110060",
      phone: "+91 98912 80450",
      email: "फ़ोन द्वारा संपर्क करें",
      hours: [
        { day: "सोमवार - शुक्रवार", time: "सुबह 10:00 - शाम 4:00" },
        { day: "शनिवार", time: "सुबह 10:00 - दोपहर 2:00" },
        { day: "रविवार", time: "बंद" },
      ],
      directions: "नई दिल्ली के केंद्र में स्थित, सर गंगा राम हॉस्पिटल मेट्रो (राजेंद्र प्लेस स्टेशन) और प्रमुख सड़क नेटवर्क द्वारा आसानी से पहुंचा जा सकता है।",
    },
    insights: {
      badge: "मरीज़ शिक्षा",
      title: "जानकारी और मार्गदर्शन",
      list: [
        { title: "लिपोसक्शन बनाम टमी टक: कौन सा सही है?", excerpt: "बॉडी कॉन्टूरिंग के बारे में सूचित निर्णय लेने के लिए प्रमुख अंतर समझें।", tag: "कॉस्मेटिक", image: "/images/image-1.png", content: "en" },
        { title: "बर्न रिकंस्ट्रक्शन: एक मरीज़ गाइड", excerpt: "प्रारंभिक उपचार से लेकर दीर्घकालिक रिकवरी तक बर्न रिकंस्ट्रक्शन के चरणों के बारे में जानें।", tag: "रिकंस्ट्रक्टिव", image: "/images/image-3.png", content: "en" },
        { title: "PRP थेरेपी: त्वचा कायाकल्प", excerpt: "जानें कैसे प्लेटलेट-रिच प्लाज़्मा थेरेपी प्राकृतिक त्वचा कायाकल्प के लिए कोलेजन उत्पादन को उत्तेजित करती है।", tag: "नॉन-सर्जिकल", image: "/images/Image-2.png", content: "en" },
      ],
    },
    cta: {
      title: "अगला कदम उठाने के लिए तैयार हैं?",
      desc: "डॉ. रमन शर्मा के साथ गोपनीय परामर्श बुक करें।",
      button: "परामर्श बुक करें",
      phone: "कॉल करें: +91 98912 80450",
    },
    footer: {
      tagline: "सटीकता। करुणा। पुनर्स्थापना।",
      location: "सर गंगा राम हॉस्पिटल, ओल्ड राजिंदर नगर, नई दिल्ली - 110060",
      rights: "© 2026 डॉ. रमन शर्मा। सर्वाधिकार सुरक्षित।",
      quickLinks: "त्वरित लिंक",
      contactUs: "संपर्क करें",
      followUs: "हमें फ़ॉलो करें",
    },
  },
};

/* ── Intersection Observer Hook ── */
function useInView(threshold = 0.05) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function AnimatedSection({ children, delay = 0, style = {} }) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} style={{
      ...style,
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(40px)",
      transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
    }}>
      {children}
    </div>
  );
}

/* ── FAQ Accordion ── */
/* ── Blog Modal ── */
function BlogModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!article) return null;

  // For Hindi mode, use English content from corresponding article
  const content = article.content === "en"
    ? translations.en.insights.list.find((_, i) => translations.hi.insights.list.indexOf(article) === i)?.content || ""
    : article.content;

  const renderContent = (text) => {
    return text.split("\n\n").map((block, i) => {
      if (block.startsWith("**") && block.endsWith("**")) {
        return <h2 key={i} style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: "#111", margin: "32px 0 16px" }}>{block.replace(/\*\*/g, "")}</h2>;
      }
      if (block.startsWith("*") && block.endsWith("*") && !block.startsWith("**")) {
        return <h3 key={i} style={{ fontSize: 17, fontWeight: 600, color: "#222", margin: "24px 0 12px", fontStyle: "italic" }}>{block.replace(/^\*|\*$/g, "")}</h3>;
      }
      if (block.includes("\n-")) {
        const lines = block.split("\n");
        const intro = lines[0];
        const items = lines.filter(l => l.startsWith("- "));
        return (
          <div key={i}>
            {intro && !intro.startsWith("- ") && <p style={{ fontSize: 15, lineHeight: 1.8, color: "#444", marginBottom: 12 }}>{intro}</p>}
            <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
              {items.map((item, j) => {
                const text = item.replace(/^- /, "");
                const boldMatch = text.match(/^\*\*(.+?)\*\*:?\s*(.*)/);
                return (
                  <li key={j} style={{ fontSize: 14.5, lineHeight: 1.8, color: "#444", marginBottom: 8 }}>
                    {boldMatch ? <><strong style={{ color: "#222" }}>{boldMatch[1]}</strong>{boldMatch[2] ? `: ${boldMatch[2]}` : ""}</> : text}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      }
      // Regular paragraph with inline bold
      const parts = block.split(/(\*\*.*?\*\*)/g);
      return (
        <p key={i} style={{ fontSize: 15, lineHeight: 1.85, color: "#444", marginBottom: 16 }}>
          {parts.map((part, j) => {
            if (part.startsWith("**") && part.endsWith("**")) {
              return <strong key={j} style={{ color: "#222" }}>{part.slice(2, -2)}</strong>;
            }
            return part;
          })}
        </p>
      );
    });
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 2000,
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "flex-start", justifyContent: "center",
        padding: "40px 20px", overflowY: "auto",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "#fff", borderRadius: 20, maxWidth: 780, width: "100%",
          boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
          animation: "fadeUp 0.4s ease-out",
          marginBottom: 40,
        }}
      >
        {/* Hero image */}
        {article.image && (
          <div style={{
            height: 320, borderRadius: "20px 20px 0 0", overflow: "hidden",
            position: "relative",
          }}>
            <img
              src={article.image}
              alt={article.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
            }} />
            <span style={{
              position: "absolute", top: 16, left: 20,
              padding: "5px 14px", borderRadius: 20, background: "rgba(255,255,255,0.2)",
              backdropFilter: "blur(4px)", color: "#fff", fontSize: 12, fontWeight: 600,
            }}>{article.tag}</span>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "sticky", top: 16, float: "right", marginRight: 16, marginTop: article.image ? -48 : 16,
            width: 40, height: 40, borderRadius: "50%",
            background: article.image ? "rgba(0,0,0,0.4)" : "#f0f0f0",
            backdropFilter: "blur(4px)",
            border: "none", cursor: "pointer", color: article.image ? "#fff" : "#333",
            fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center",
            zIndex: 10,
          }}
        >×</button>

        {/* Content */}
        <div style={{ padding: "32px 40px 48px" }}>
          <h1 style={{
            fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 32px)",
            fontWeight: 600, color: "#111", lineHeight: 1.3, marginBottom: 24,
          }}>{article.title}</h1>

          <div style={{
            display: "flex", alignItems: "center", gap: 12, marginBottom: 32,
            paddingBottom: 24, borderBottom: "1px solid #eee",
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: 10, background: "linear-gradient(135deg, #0c4a3e, #1a7a5a)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", fontWeight: 700, fontSize: 13, fontFamily: "'Playfair Display', serif",
            }}>RS</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600, color: "#222" }}>Dr. Raman Sharma</div>
              <div style={{ fontSize: 12, color: "#999" }}>Plastic & Reconstructive Surgeon</div>
            </div>
          </div>

          {renderContent(content)}

          {/* CTA at bottom */}
          <div style={{
            marginTop: 40, padding: 28, borderRadius: 16,
            background: "linear-gradient(135deg, #0c4a3e, #1a7a5a)",
            color: "#fff", textAlign: "center",
          }}>
            <p style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Have questions about this procedure?</p>
            <p style={{ fontSize: 13, opacity: 0.8, marginBottom: 20 }}>Schedule a consultation with Dr. Sharma to discuss your options.</p>
            <a href="tel:+919891280450" style={{
              display: "inline-block", padding: "12px 32px", borderRadius: 28,
              background: "#fff", color: "#0c4a3e", fontSize: 14, fontWeight: 600,
              textDecoration: "none",
            }}>Book Consultation</a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      onClick={() => setOpen(!open)}
      style={{
        padding: "20px 24px", borderRadius: 14, background: "#fff",
        border: open ? "1px solid #0c4a3e" : "1px solid #eee",
        cursor: "pointer", transition: "all 0.3s",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
        <span style={{ fontWeight: 600, fontSize: 15, color: "#222", lineHeight: 1.5 }}>{q}</span>
        <span style={{
          fontSize: 20, color: "#0c4a3e", transition: "transform 0.3s", flexShrink: 0,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}>+</span>
      </div>
      <div style={{
        maxHeight: open ? 200 : 0, overflow: "hidden", transition: "max-height 0.4s ease",
      }}>
        <p style={{ fontSize: 14, lineHeight: 1.75, color: "#666", paddingTop: 14 }}>{a}</p>
      </div>
    </div>
  );
}

/* ── Review Carousel (auto-scroll) ── */
function ReviewCarousel({ reviews }) {
  const [active, setActive] = useState(0);
  const total = reviews.length;
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    const pages = Math.ceil(total / visibleCount);
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % pages);
    }, 5000);
    return () => clearInterval(interval);
  }, [total, visibleCount]);

  const pages = Math.ceil(total / visibleCount);
  const safeActive = active >= pages ? 0 : active;
  const visibleReviews = reviews.slice(safeActive * visibleCount, safeActive * visibleCount + visibleCount);

  return (
    <div>
      <div className="reviews-grid" style={{
        display: "grid", gridTemplateColumns: `repeat(${visibleCount}, 1fr)`, gap: 24,
        transition: "opacity 0.4s ease", opacity: 1,
      }}>
        {visibleReviews.map((r, i) => (
          <div key={`${safeActive}-${i}`} className="review-card" style={{
            padding: 32, borderRadius: 16, background: "#fff", border: "1px solid #eee",
            height: "100%", display: "flex", flexDirection: "column",
            animation: `fadeUp 0.5s ease-out ${i * 0.1}s both`,
          }}>
            <div style={{ display: "flex", gap: 4, marginBottom: 16 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <span key={s} style={{ color: "#e8a838", fontSize: 16 }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: "#555", marginBottom: 20, fontStyle: "italic", flex: 1 }}>
              "{r.text}"
            </p>
            <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 16 }}>
              <div style={{ fontWeight: 600, fontSize: 14, color: "#222" }}>{r.name}</div>
              <div style={{ fontSize: 12, color: "#999", marginTop: 2 }}>{r.procedure}</div>
            </div>
          </div>
        ))}
      </div>
      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 32 }}>
        {Array.from({ length: pages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: safeActive === i ? 28 : 8, height: 8, borderRadius: 4, border: "none",
              background: safeActive === i ? "#0c4a3e" : "#d0d0d0", cursor: "pointer",
              transition: "all 0.3s",
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ── Chatbot ──────────────────────────────────────────────────────────────────
/* ── Appointment Booking Modal ── */
function AppointmentModal({ lang, onClose }) {
  const isHi = lang === "hi";
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const timeSlots = [
    "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
    "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  ];

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const monthName = currentMonth.toLocaleDateString(isHi ? "hi-IN" : "en-US", { month: "long", year: "numeric" });

  const dayNames = isHi
    ? ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"]
    : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const isDateDisabled = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < today || date.getDay() === 0; // Past dates and Sundays
  };

  const isSaturday = (day) => {
    return new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).getDay() === 6;
  };

  const getSaturdaySlots = () => timeSlots.slice(0, 8); // 10 AM - 1:30 PM

  const handleSubmit = () => {
    if (!selectedDate || !selectedTime || !name.trim() || !phone.trim()) return;
    const dateStr = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), selectedDate)
      .toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    const msg = `Hi Dr. Sharma, I'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nDate: ${dateStr}\nTime: ${selectedTime}\n\nPlease confirm availability. Thank you.`;
    const whatsappUrl = `https://wa.me/919891280450?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
    setSubmitted(true);
  };

  const prevMonth = () => {
    const prev = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    if (prev.getFullYear() >= today.getFullYear() && prev.getMonth() >= today.getMonth()) {
      setCurrentMonth(prev);
    }
  };
  const nextMonth = () => {
    const next = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    const maxMonth = new Date(today.getFullYear(), today.getMonth() + 2, 1);
    if (next < maxMonth) setCurrentMonth(next);
  };

  const availableSlots = selectedDate && isSaturday(selectedDate) ? getSaturdaySlots() : timeSlots;

  return (
    <div onClick={onClose} style={{
      position: "fixed", inset: 0, zIndex: 2000,
      background: "rgba(0,0,0,0.5)", backdropFilter: "blur(4px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      padding: 20,
    }}>
      <div onClick={(e) => e.stopPropagation()} style={{
        background: "#fff", borderRadius: 20, maxWidth: 440, width: "100%",
        maxHeight: "90vh", overflowY: "auto",
        boxShadow: "0 20px 60px rgba(0,0,0,0.2)", animation: "fadeUp 0.3s ease-out",
      }}>
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #0c4a3e, #1a7a5a)",
          padding: "20px 24px", borderRadius: "20px 20px 0 0", color: "#fff",
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 16 }}>
              {isHi ? "अपॉइंटमेंट बुक करें" : "Book Appointment"}
            </div>
            <div style={{ fontSize: 12, opacity: 0.7, marginTop: 2 }}>
              {isHi ? "तारीख़ और समय चुनें" : "Select a date & time"}
            </div>
          </div>
          <button onClick={onClose} style={{
            background: "rgba(255,255,255,0.15)", border: "none", color: "#fff",
            width: 32, height: 32, borderRadius: "50%", cursor: "pointer", fontSize: 16,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>×</button>
        </div>

        {submitted ? (
          <div style={{ padding: "48px 24px", textAlign: "center" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, marginBottom: 12, color: "#0c4a3e" }}>
              {isHi ? "अनुरोध भेजा गया!" : "Request Sent!"}
            </h3>
            <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, marginBottom: 24 }}>
              {isHi
                ? "आपका अपॉइंटमेंट अनुरोध WhatsApp के माध्यम से भेजा गया है। हम जल्द ही पुष्टि करेंगे।"
                : "Your appointment request has been sent via WhatsApp. We'll confirm your booking shortly."}
            </p>
            <button onClick={onClose} style={{
              padding: "12px 32px", borderRadius: 24, border: "none", cursor: "pointer",
              background: "#0c4a3e", color: "#fff", fontSize: 14, fontWeight: 600,
            }}>
              {isHi ? "बंद करें" : "Close"}
            </button>
          </div>
        ) : (
          <div style={{ padding: "20px 24px 24px" }}>
            {/* Calendar */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <button onClick={prevMonth} style={{
                  background: "none", border: "1px solid #eee", borderRadius: 8, padding: "6px 10px",
                  cursor: "pointer", fontSize: 14, color: "#555",
                }}>‹</button>
                <span style={{ fontWeight: 600, fontSize: 15, color: "#222" }}>{monthName}</span>
                <button onClick={nextMonth} style={{
                  background: "none", border: "1px solid #eee", borderRadius: 8, padding: "6px 10px",
                  cursor: "pointer", fontSize: 14, color: "#555",
                }}>›</button>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4, textAlign: "center" }}>
                {dayNames.map((d) => (
                  <div key={d} style={{ fontSize: 11, color: "#999", fontWeight: 600, padding: "4px 0", textTransform: "uppercase" }}>{d}</div>
                ))}
                {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const disabled = isDateDisabled(day);
                  const selected = selectedDate === day;
                  return (
                    <button
                      key={day}
                      onClick={() => !disabled && setSelectedDate(day)}
                      disabled={disabled}
                      style={{
                        width: "100%", aspectRatio: "1", borderRadius: 10, border: "none",
                        cursor: disabled ? "default" : "pointer",
                        background: selected ? "#0c4a3e" : disabled ? "transparent" : "#f8f7f4",
                        color: selected ? "#fff" : disabled ? "#ccc" : "#333",
                        fontWeight: selected ? 700 : 500, fontSize: 13,
                        transition: "all 0.15s",
                      }}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <div style={{ fontSize: 11, color: "#999", marginTop: 8 }}>
                {isHi ? "रविवार को क्लिनिक बंद रहता है" : "Clinic closed on Sundays"}
              </div>
            </div>

            {/* Time slots */}
            {selectedDate && (
              <div style={{ marginBottom: 20 }}>
                <div style={{ fontWeight: 600, fontSize: 13, color: "#222", marginBottom: 10 }}>
                  {isHi ? "समय चुनें" : "Select Time"}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 6 }}>
                  {availableSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      style={{
                        padding: "8px 4px", borderRadius: 8, fontSize: 12, fontWeight: 500,
                        border: selectedTime === time ? "2px solid #0c4a3e" : "1px solid #eee",
                        background: selectedTime === time ? "#e8f4ef" : "#fff",
                        color: selectedTime === time ? "#0c4a3e" : "#555",
                        cursor: "pointer", transition: "all 0.15s",
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Patient info */}
            {selectedDate && selectedTime && (
              <div style={{ marginBottom: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isHi ? "आपका नाम" : "Your name"}
                  style={{
                    padding: "12px 16px", borderRadius: 10, border: "1px solid #ddd",
                    fontSize: 14, outline: "none", background: "#fafaf8",
                  }}
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={isHi ? "फ़ोन नंबर" : "Phone number"}
                  type="tel"
                  style={{
                    padding: "12px 16px", borderRadius: 10, border: "1px solid #ddd",
                    fontSize: 14, outline: "none", background: "#fafaf8",
                  }}
                />
              </div>
            )}

            {/* Submit */}
            {selectedDate && selectedTime && (
              <button
                onClick={handleSubmit}
                disabled={!name.trim() || !phone.trim()}
                style={{
                  width: "100%", padding: "14px", borderRadius: 12, border: "none",
                  background: name.trim() && phone.trim() ? "#0c4a3e" : "#ccc",
                  color: "#fff", fontSize: 15, fontWeight: 600, cursor: name.trim() && phone.trim() ? "pointer" : "default",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                  transition: "background 0.2s",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {isHi ? "WhatsApp पर बुक करें" : "Book via WhatsApp"}
              </button>
            )}

            {/* Or call directly */}
            <div style={{ textAlign: "center", marginTop: 16 }}>
              <a href="tel:+919891280450" style={{
                fontSize: 13, color: "#0c4a3e", fontWeight: 600, textDecoration: "none",
              }}>
                {isHi ? "या सीधे कॉल करें: +91 98912 80450" : "Or call directly: +91 98912 80450"}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Floating Action Button ── */
function FloatingActions({ lang, onBooking }) {
  const [open, setOpen] = useState(false);
  const isHi = lang === "hi";

  const actions = [
    {
      label: isHi ? "कॉल करें" : "Call Now",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
        </svg>
      ),
      href: "tel:+919891280450",
      bg: "#0c4a3e",
    },
    {
      label: "WhatsApp",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      href: "https://wa.me/919891280450?text=" + encodeURIComponent(isHi ? "नमस्ते डॉ. शर्मा, मैं अपॉइंटमेंट बुक करना चाहता/चाहती हूं।" : "Hi Dr. Sharma, I'd like to book a consultation."),
      bg: "#25D366",
    },
    {
      label: isHi ? "अपॉइंटमेंट" : "Book Appt",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
        </svg>
      ),
      onClick: () => { setOpen(false); onBooking(); },
      bg: "#0c4a3e",
    },
  ];

  return (
    <>
      {/* Action buttons */}
      <div style={{
        position: "fixed", bottom: 96, right: 24, zIndex: 999,
        display: "flex", flexDirection: "column", gap: 10,
        opacity: open ? 1 : 0, transform: open ? "translateY(0)" : "translateY(20px)",
        pointerEvents: open ? "auto" : "none", transition: "all 0.25s ease",
      }}>
        {actions.map((action, i) => (
          action.href ? (
            <a
              key={i}
              href={action.href}
              target={action.href.startsWith("http") ? "_blank" : undefined}
              rel={action.href.startsWith("http") ? "noopener noreferrer" : undefined}
              style={{
                display: "flex", alignItems: "center", gap: 10,
                textDecoration: "none",
                flexDirection: "row-reverse",
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: action.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}>
                {action.icon}
              </div>
              <span style={{
                background: "#fff", padding: "6px 12px", borderRadius: 8, fontSize: 13,
                fontWeight: 600, color: "#333", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                whiteSpace: "nowrap",
              }}>
                {action.label}
              </span>
            </a>
          ) : (
            <button
              key={i}
              onClick={action.onClick}
              style={{
                display: "flex", alignItems: "center", gap: 10, background: "none", border: "none",
                cursor: "pointer", flexDirection: "row-reverse",
              }}
            >
              <div style={{
                width: 48, height: 48, borderRadius: 14, background: action.bg,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              }}>
                {action.icon}
              </div>
              <span style={{
                background: "#fff", padding: "6px 12px", borderRadius: 8, fontSize: 13,
                fontWeight: 600, color: "#333", boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                whiteSpace: "nowrap",
              }}>
                {action.label}
              </span>
            </button>
          )
        ))}
      </div>

      {/* Main FAB */}
      <button
        onClick={() => setOpen(!open)}
        aria-label={open ? "Close actions" : "Contact us"}
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 1000,
          width: 56, height: 56, borderRadius: 16, border: "none", cursor: "pointer",
          background: "linear-gradient(135deg, #0c4a3e, #1a7a5a)", color: "#fff",
          fontSize: 24, display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(12,74,62,0.4)", transition: "all 0.25s",
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
        }}
      >
        {open ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        )}
      </button>
    </>
  );
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function App() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const [blogArticle, setBlogArticle] = useState(null);
  const [showBooking, setShowBooking] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrolled = scrollY > 60;
  const navBg = scrolled ? "rgba(255,255,255,0.97)" : "transparent";
  const navText = scrolled ? "#1a1a1a" : "#fff";
  const navShadow = scrolled ? "0 1px 20px rgba(0,0,0,0.08)" : "none";

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", color: "#1a1a1a", background: "#fafaf8" }}>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%, 100% { opacity: 0.6; } 50% { opacity: 1; } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        @keyframes gradientShift { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .fade-up { animation: fadeUp 0.8s ease-out both; }
        .service-card { transition: all 0.3s ease; cursor: pointer; position: relative; overflow: hidden; }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 12px 40px rgba(0,0,0,0.1) !important; border-color: #0c4a3e !important; }
        .service-card:hover .service-icon-wrap { background: #0c4a3e !important; color: #fff !important; }
        .cta-btn { transition: all 0.25s ease; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(12,74,62,0.35); }
        .nav-link { transition: opacity 0.2s; position: relative; }
        .nav-link:hover { opacity: 0.7 !important; }
        .review-card { transition: transform 0.3s; }
        .review-card:hover { transform: translateY(-4px); }
        .why-card { transition: all 0.3s ease; }
        .why-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08) !important; }
        .procedure-card { transition: all 0.3s ease; }
        .procedure-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.08) !important; border-color: #0c4a3e !important; }
        .insight-card { transition: all 0.3s ease; }
        .insight-card:hover { transform: translateY(-6px); box-shadow: 0 12px 36px rgba(0,0,0,0.1) !important; }
        .footer-link { transition: color 0.2s; cursor: pointer; }
        .footer-link:hover { color: #4dd6a8 !important; }
        .procedure-tag { display: inline-block; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 600; background: rgba(12,74,62,0.08); color: #0c4a3e; }
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .services-grid { grid-template-columns: 1fr !important; }
          .reviews-grid { grid-template-columns: 1fr !important; }
          .why-grid { grid-template-columns: 1fr !important; }
          .procedures-grid { grid-template-columns: 1fr !important; }
          .insights-grid { grid-template-columns: 1fr !important; }
          .clinic-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-btns { flex-direction: column !important; align-items: center !important; }
          .cta-btns { flex-direction: column !important; align-items: center !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
          nav { padding-left: 20px !important; padding-right: 20px !important; }
          .stats-bar { padding: 32px 20px !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "16px 40px", display: "flex", alignItems: "center", justifyContent: "space-between",
        background: navBg, backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: navShadow, transition: "all 0.3s",
      }}>
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #0c4a3e, #1a7a5a)",
            display: "flex", alignItems: "center", justifyContent: "center",
            color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'Playfair Display', serif",
            flexShrink: 0, boxShadow: "0 2px 8px rgba(12,74,62,0.3)",
          }}>RS</div>
          <div>
            <span style={{ fontWeight: 600, fontSize: 15, color: navText, transition: "color 0.3s", display: "block" }}>
              Dr. Raman Sharma
            </span>
            <span style={{ fontSize: 10, color: navText, opacity: 0.6, transition: "color 0.3s", fontWeight: 500, letterSpacing: 0.5 }}>
              Plastic & Reconstructive Surgeon
            </span>
          </div>
        </a>

        <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
          {Object.entries(t.nav).map(([key, val]) => (
            <a key={key} href={`#${key}`} className="nav-link" style={{
              textDecoration: "none", color: navText, fontSize: 14, fontWeight: 500, transition: "color 0.3s",
            }}>
              {val}
            </a>
          ))}
          <button onClick={() => setShowBooking(true)} className="cta-btn" style={{
            padding: "8px 20px", borderRadius: 24, border: "none", cursor: "pointer",
            background: "#0c4a3e", color: "#fff", fontSize: 13, fontWeight: 600,
          }}>
            {t.hero.cta1}
          </button>
          <div style={{ display: "flex", gap: 2, background: "rgba(128,128,128,0.15)", borderRadius: 20, padding: 2 }}>
            {["en", "hi"].map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "5px 12px", borderRadius: 18, border: "none", cursor: "pointer",
                fontSize: 12, fontWeight: 600, transition: "all 0.2s",
                background: lang === l ? "#0c4a3e" : "transparent",
                color: lang === l ? "#fff" : navText,
              }}>
                {l === "en" ? "EN" : "हिं"}
              </button>
            ))}
          </div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            flexDirection: "column", gap: 5, padding: 4,
          }}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 22, height: 2, background: navText, display: "block", borderRadius: 2,
              transition: "all 0.3s",
              transform: menuOpen ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 1 ? "opacity:0" : "rotate(-45deg) translate(5px,-5px)") : "none",
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "rgba(255,255,255,0.98)", backdropFilter: "blur(12px)",
          padding: "20px 24px", display: "flex", flexDirection: "column", gap: 16,
          borderBottom: "1px solid #eee", boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}>
          {Object.entries(t.nav).map(([key, val]) => (
            <a key={key} href={`#${key}`} onClick={() => setMenuOpen(false)} style={{
              textDecoration: "none", color: "#1a1a1a", fontSize: 16, fontWeight: 500,
            }}>
              {val}
            </a>
          ))}
          <button onClick={() => { setMenuOpen(false); setShowBooking(true); }} style={{
            color: "#fff", fontSize: 14, fontWeight: 600, border: "none", cursor: "pointer",
            background: "#0c4a3e", padding: "10px 20px", borderRadius: 24, textAlign: "center",
          }}>
            {t.hero.cta1}
          </button>
          <div style={{ display: "flex", gap: 8, paddingTop: 8, borderTop: "1px solid #eee" }}>
            {["en", "hi"].map((l) => (
              <button key={l} onClick={() => { setLang(l); setMenuOpen(false); }} style={{
                padding: "7px 18px", borderRadius: 18, border: "none", cursor: "pointer",
                fontSize: 13, fontWeight: 600,
                background: lang === l ? "#0c4a3e" : "#eee",
                color: lang === l ? "#fff" : "#555",
              }}>
                {l === "en" ? "English" : "हिन्दी"}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── HERO ── */}
      <section id="home" style={{
        minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
        background: "linear-gradient(160deg, #041510 0%, #071f1a 20%, #0c4a3e 45%, #14705a 70%, #1a8a6e 90%, #22a080 100%)",
        backgroundSize: "400% 400%", animation: "gradientShift 15s ease infinite",
        position: "relative", overflow: "hidden", padding: "120px 40px 80px",
      }}>
        {/* Decorative elements */}
        <div style={{ position: "absolute", top: -120, right: -120, width: 500, height: 500, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -80, left: -80, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
        <div style={{ position: "absolute", top: "15%", right: "20%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)" }} />
        <div style={{ position: "absolute", top: "20%", left: "10%", width: 6, height: 6, borderRadius: "50%", background: "rgba(255,255,255,0.2)", animation: "pulse 3s infinite" }} />
        <div style={{ position: "absolute", top: "60%", right: "15%", width: 4, height: 4, borderRadius: "50%", background: "rgba(255,255,255,0.15)", animation: "pulse 4s infinite 1s" }} />
        <div style={{ position: "absolute", bottom: "25%", left: "20%", width: 5, height: 5, borderRadius: "50%", background: "rgba(255,255,255,0.12)", animation: "pulse 5s infinite 2s" }} />
        <div style={{ position: "absolute", top: "40%", left: "5%", width: 3, height: 3, borderRadius: "50%", background: "rgba(255,255,255,0.1)", animation: "pulse 3.5s infinite 0.5s" }} />

        {/* Cross/plus medical symbols */}
        <div style={{ position: "absolute", top: "30%", right: "8%", fontSize: 20, color: "rgba(255,255,255,0.06)", animation: "float 6s ease-in-out infinite" }}>+</div>
        <div style={{ position: "absolute", bottom: "35%", left: "12%", fontSize: 16, color: "rgba(255,255,255,0.05)", animation: "float 7s ease-in-out infinite 1s" }}>+</div>

        <div style={{ textAlign: "center", color: "#fff", maxWidth: 800, position: "relative", zIndex: 1 }} className="fade-up">
          <div style={{
            display: "inline-block", padding: "8px 24px", borderRadius: 28,
            border: "1px solid rgba(255,255,255,0.2)", fontSize: 12, letterSpacing: 4,
            textTransform: "uppercase", marginBottom: 36, fontWeight: 500,
            background: "rgba(255,255,255,0.06)", backdropFilter: "blur(4px)",
          }}>
            {t.hero.tagline}
          </div>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(42px, 7vw, 78px)",
            fontWeight: 600, lineHeight: 1.08, marginBottom: 20,
            letterSpacing: "-0.02em",
          }}>
            {t.hero.title}
          </h1>
          <p style={{ fontSize: "clamp(17px,2.2vw,22px)", fontWeight: 400, opacity: 0.9, marginBottom: 10, letterSpacing: 0.5 }}>
            {t.hero.subtitle}
          </p>
          <p style={{
            fontSize: 15, fontWeight: 500, opacity: 0.55, marginBottom: 48,
            display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#4dd6a8", display: "inline-block" }}></span>
            {t.hero.hospital}
          </p>
          <div className="hero-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => setShowBooking(true)} className="cta-btn" style={{
              padding: "16px 40px", borderRadius: 32, border: "none", cursor: "pointer",
              background: "#fff", color: "#0c4a3e", fontSize: 15, fontWeight: 600,
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}>
              {t.hero.cta1}
            </button>
            <a href="#services" className="cta-btn" style={{
              padding: "16px 40px", borderRadius: 32,
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)",
              color: "#fff", fontSize: 15, fontWeight: 500, textDecoration: "none",
              backdropFilter: "blur(4px)",
            }}>
              {t.hero.cta2}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        }}>
          <div style={{
            width: 24, height: 40, borderRadius: 12, border: "2px solid rgba(255,255,255,0.2)",
            display: "flex", justifyContent: "center", paddingTop: 8,
          }}>
            <div style={{
              width: 3, height: 8, borderRadius: 2, background: "rgba(255,255,255,0.5)",
              animation: "pulse 2s infinite",
            }} />
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="stats-bar" style={{
        background: "#fff", padding: "48px 60px", borderBottom: "1px solid #eee",
        boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
      }}>
        <div className="stats-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(4, 1fr)", maxWidth: 1100, margin: "0 auto",
          gap: 20,
        }}>
          {Object.values(t.stats).map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{ textAlign: "center", padding: "16px 0" }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{
                  fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 700,
                  color: "#0c4a3e", marginBottom: 6,
                  background: "linear-gradient(135deg, #0c4a3e, #1a7a5a)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>{s.num}</div>
                <div style={{ fontSize: 13, color: "#777", fontWeight: 500, textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "110px 40px" }}>
        <div className="about-grid" style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "1fr 1.3fr", gap: 80, alignItems: "center",
        }}>
          <AnimatedSection>
            <div style={{ position: "relative" }}>
              <div style={{
                width: "100%", aspectRatio: "3/4", borderRadius: 24, overflow: "hidden",
                background: "linear-gradient(135deg, #e8f0ed, #d0e0d8)",
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              }}>
                <img
                  src="/images/image-4.png"
                  alt="Dr. Raman Sharma"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.parentElement.innerHTML =
                      '<div style="font-family:\'Playfair Display\',serif;font-size:48px;color:#0c4a3e;font-weight:600;text-align:center;">Dr. RS</div>';
                  }}
                />
              </div>
              {/* Floating badge */}
              <div style={{
                position: "absolute", bottom: -16, right: -16, background: "#0c4a3e", color: "#fff",
                padding: "14px 20px", borderRadius: 16, boxShadow: "0 8px 24px rgba(12,74,62,0.3)",
                display: "flex", alignItems: "center", gap: 10,
              }}>
                <span style={{ fontSize: 24, fontWeight: 700, fontFamily: "'Playfair Display', serif" }}>15+</span>
                <span style={{ fontSize: 11, lineHeight: 1.3, opacity: 0.85 }}>Years of<br/>Excellence</span>
              </div>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 24, letterSpacing: 0.5,
              }}>{t.about.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, lineHeight: 1.25, marginBottom: 28, color: "#111",
              }}>{t.about.title}</h2>
              <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#555", marginBottom: 16 }}>{t.about.p1}</p>
              <p style={{ fontSize: 15.5, lineHeight: 1.8, color: "#555", marginBottom: 32 }}>{t.about.p2}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {t.about.credentials.map((c, i) => (
                  <div key={i} style={{
                    display: "flex", alignItems: "center", gap: 12,
                    padding: "14px 18px", borderRadius: 12, background: "#f8f7f4",
                    border: "1px solid #eee", transition: "all 0.2s",
                  }}>
                    <span style={{
                      width: 28, height: 28, borderRadius: 8, background: "#e8f4ef",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#0c4a3e", fontSize: 13, fontWeight: 700, flexShrink: 0,
                    }}>✓</span>
                    <span style={{ fontSize: 14, color: "#444", fontWeight: 500 }}>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5,
              }}>{t.whyChoose.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, color: "#111",
              }}>{t.whyChoose.title}</h2>
            </div>
          </AnimatedSection>
          <div className="why-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {t.whyChoose.items.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="why-card" style={{
                  padding: 28, borderRadius: 16, background: "#fafaf8", border: "1px solid #eee",
                  height: "100%",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 14,
                    background: "linear-gradient(135deg, #e8f4ef, #d4ece3)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, marginBottom: 18,
                  }}>{item.icon}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "#111" }}>{item.title}</h3>
                  <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666" }}>{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ padding: "100px 40px", background: "#f5f4f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5,
              }}>{t.services.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, color: "#111",
              }}>{t.services.title}</h2>
            </div>
          </AnimatedSection>
          <div className="services-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {t.services.list.map((s, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div
                  className="service-card"
                  style={{
                    padding: 32, borderRadius: 18, border: "1px solid #e0e0e0", background: "#fff",
                    height: "100%",
                  }}
                  onClick={() => setActiveService(activeService === i ? null : i)}
                >
                  <div className="service-icon-wrap" style={{
                    width: 52, height: 52, borderRadius: 14, background: "#e8f4ef",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 24, marginBottom: 20, color: "#0c4a3e", transition: "all 0.3s",
                  }}>{s.icon}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 10, color: "#111" }}>{s.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#666", marginBottom: 16 }}>{s.desc}</p>
                  {/* Procedure tags */}
                  <div style={{
                    maxHeight: activeService === i ? 200 : 0, overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 12, borderTop: "1px solid #eee" }}>
                      {s.procedures.map((p, j) => (
                        <span key={j} className="procedure-tag">{p}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{
                    fontSize: 12, color: "#0c4a3e", fontWeight: 600, marginTop: 8,
                    display: "flex", alignItems: "center", gap: 4,
                  }}>
                    {activeService === i ? "Show less" : "View procedures"}
                    <span style={{
                      transition: "transform 0.3s",
                      transform: activeService === i ? "rotate(180deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}>▾</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCEDURES HIGHLIGHT ── */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5,
              }}>{t.procedures.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, color: "#111",
              }}>{t.procedures.title}</h2>
            </div>
          </AnimatedSection>
          <div className="procedures-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {t.procedures.list.map((p, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="procedure-card" style={{
                  padding: 32, borderRadius: 18, border: "1px solid #eee", background: "#fafaf8",
                  display: "flex", flexDirection: "column", height: "100%",
                }}>
                  <h3 style={{
                    fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600,
                    color: "#111", marginBottom: 12,
                  }}>{p.name}</h3>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "#666", marginBottom: 20, flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 24, borderTop: "1px solid #eee", paddingTop: 16 }}>
                    <div>
                      <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Duration</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#0c4a3e" }}>{p.duration}</div>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, color: "#999", textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>Recovery</div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: "#0c4a3e" }}>{p.recovery}</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section id="reviews" style={{ padding: "100px 40px", background: "#f5f4f0" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5,
              }}>{t.reviews.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, color: "#111",
              }}>{t.reviews.title}</h2>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 16 }}>
                <div style={{ display: "flex", gap: 2 }}>
                  {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#e8a838", fontSize: 20 }}>★</span>)}
                </div>
                <span style={{ fontSize: 14, color: "#666", fontWeight: 500 }}>5.0 rating on Google</span>
              </div>
            </div>
          </AnimatedSection>
          <ReviewCarousel reviews={t.reviews.list} />
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a
              href="https://www.google.com/maps/place/Dr.+Raman+Sharma+%7C+Best+Plastic+Surgeon+in+Delhi/@28.6384582,77.1895559,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0377c398c601:0xce680e394e96f83b"
              target="_blank" rel="noopener noreferrer"
              style={{
                fontSize: 14, color: "#0c4a3e", fontWeight: 600, textDecoration: "none",
                padding: "10px 24px", borderRadius: 24, border: "1px solid #0c4a3e",
                display: "inline-block", transition: "all 0.2s",
              }}
            >
              View all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5,
              }}>{t.insights.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, color: "#111",
              }}>{t.insights.title}</h2>
            </div>
          </AnimatedSection>
          <div className="insights-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {t.insights.list.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div
                  className="insight-card"
                  onClick={() => setBlogArticle(item)}
                  style={{
                    borderRadius: 18, overflow: "hidden", background: "#fafaf8",
                    border: "1px solid #eee", height: "100%", display: "flex", flexDirection: "column",
                    cursor: "pointer",
                  }}
                >
                  <div style={{
                    height: 200, position: "relative", overflow: "hidden",
                  }}>
                    {item.image ? (
                      <img src={item.image} alt={item.title} style={{
                        width: "100%", height: "100%", objectFit: "cover",
                        transition: "transform 0.4s ease",
                      }}
                        onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                        onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
                      />
                    ) : (
                      <div style={{
                        width: "100%", height: "100%",
                        background: `linear-gradient(135deg, ${i === 0 ? "#0c4a3e, #1a7a5a" : i === 1 ? "#14705a, #22a080" : "#1a7a5a, #0c4a3e"})`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}>
                        <span style={{ fontSize: 40, opacity: 0.3, color: "#fff" }}>
                          {i === 0 ? "✦" : i === 1 ? "◈" : "◉"}
                        </span>
                      </div>
                    )}
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)",
                    }} />
                    <span style={{
                      position: "absolute", top: 14, left: 14,
                      padding: "4px 12px", borderRadius: 16, background: "rgba(255,255,255,0.2)",
                      backdropFilter: "blur(4px)", color: "#fff", fontSize: 11, fontWeight: 600,
                    }}>{item.tag}</span>
                  </div>
                  <div style={{ padding: "24px 24px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 style={{ fontSize: 16, fontWeight: 600, color: "#111", marginBottom: 10, lineHeight: 1.4 }}>{item.title}</h3>
                    <p style={{ fontSize: 13.5, lineHeight: 1.7, color: "#666", flex: 1 }}>{item.excerpt}</p>
                    <span style={{ fontSize: 13, color: "#0c4a3e", fontWeight: 600, marginTop: 14, display: "inline-block" }}>
                      Read more →
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "100px 40px", background: "#f5f4f0" }}>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5,
              }}>{t.faq.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, color: "#111",
              }}>{t.faq.title}</h2>
            </div>
          </AnimatedSection>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {t.faq.list.map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <FAQItem q={item.q} a={item.a} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC INFO ── */}
      <section style={{ padding: "100px 40px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <AnimatedSection>
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span style={{
                display: "inline-block", padding: "6px 18px", borderRadius: 24,
                background: "linear-gradient(135deg, #e8f4ef, #d4ece3)", color: "#0c4a3e",
                fontSize: 13, fontWeight: 600, marginBottom: 16, letterSpacing: 0.5,
              }}>{t.clinic.badge}</span>
              <h2 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px,3vw,36px)",
                fontWeight: 600, color: "#111",
              }}>{t.clinic.title}</h2>
            </div>
          </AnimatedSection>
          <div className="clinic-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
            <AnimatedSection>
              <div style={{ height: "100%" }}>
                {/* Map embed */}
                <div style={{
                  borderRadius: 18, overflow: "hidden", height: "100%", minHeight: 350,
                  border: "1px solid #eee", boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0!2d77.186981!3d28.6384582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0377c398c601%3A0xce680e394e96f83b!2sDr.%20Raman%20Sharma%20%7C%20Best%20Plastic%20Surgeon%20in%20Delhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%" height="100%" style={{ border: 0 }}
                    allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dr. Raman Sharma Clinic Location"
                  />
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                {/* Address */}
                <div style={{
                  padding: 24, borderRadius: 16, background: "#fafaf8", border: "1px solid #eee",
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: "#e8f4ef",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                  }}>📍</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "#222" }}>Address</div>
                    <div style={{ fontSize: 13.5, color: "#666", lineHeight: 1.6 }}>{t.clinic.address}</div>
                  </div>
                </div>

                {/* Phone */}
                <div style={{
                  padding: 24, borderRadius: 16, background: "#fafaf8", border: "1px solid #eee",
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: "#e8f4ef",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                  }}>📞</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, color: "#222" }}>Phone</div>
                    <a href="tel:+919891280450" style={{ fontSize: 15, color: "#0c4a3e", fontWeight: 600, textDecoration: "none" }}>
                      {t.clinic.phone}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div style={{
                  padding: 24, borderRadius: 16, background: "#fafaf8", border: "1px solid #eee",
                  display: "flex", gap: 16, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12, background: "#e8f4ef",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 20, flexShrink: 0,
                  }}>🕐</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 10, color: "#222" }}>Clinic Hours</div>
                    {t.clinic.hours.map((h, i) => (
                      <div key={i} style={{
                        display: "flex", justifyContent: "space-between", fontSize: 13.5, color: "#666",
                        padding: "6px 0", borderBottom: i < 2 ? "1px solid #eee" : "none",
                      }}>
                        <span>{h.day}</span>
                        <span style={{ fontWeight: 600, color: h.time === "Closed" || h.time === "बंद" ? "#c44" : "#0c4a3e" }}>{h.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Directions */}
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>
                  {t.clinic.directions}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="contact" style={{
        padding: "100px 40px",
        background: "linear-gradient(160deg, #041510 0%, #0c4a3e 40%, #14705a 70%, #1a8a6e 100%)",
        color: "#fff", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.05)" }} />
        <div style={{ position: "absolute", bottom: -60, left: -60, width: 250, height: 250, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.04)" }} />
        <AnimatedSection>
          <div style={{ maxWidth: 650, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h2 style={{
              fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,3.5vw,40px)",
              fontWeight: 600, marginBottom: 20, lineHeight: 1.2,
            }}>{t.cta.title}</h2>
            <p style={{ fontSize: 16, opacity: 0.8, lineHeight: 1.7, marginBottom: 40 }}>{t.cta.desc}</p>
            <div className="cta-btns" style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => setShowBooking(true)} className="cta-btn" style={{
                padding: "16px 44px", borderRadius: 32, border: "none",
                background: "#fff", color: "#0c4a3e", fontSize: 15, fontWeight: 600,
                cursor: "pointer", boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}>
                {t.cta.button}
              </button>
              <a href="tel:+919891280450" style={{
                padding: "16px 44px", borderRadius: 32,
                border: "1px solid rgba(255,255,255,0.3)", background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(4px)",
                color: "#fff", fontSize: 15, fontWeight: 500, textDecoration: "none",
              }}>
                {t.cta.phone}
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: "60px 40px 40px", background: "#041510", color: "rgba(255,255,255,0.7)",
      }}>
        <div className="footer-grid" style={{
          maxWidth: 1100, margin: "0 auto",
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48,
          paddingBottom: 40, borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 38, height: 38, borderRadius: 10, background: "linear-gradient(135deg, #0c4a3e, #1a7a5a)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontWeight: 700, fontSize: 14, fontFamily: "'Playfair Display', serif",
              }}>RS</div>
              <span style={{ fontWeight: 600, fontSize: 16, color: "#fff" }}>Dr. Raman Sharma</span>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.5)", maxWidth: 280, marginBottom: 16 }}>
              {t.footer.tagline}
            </p>
            <p style={{ fontSize: 12, color: "rgba(255,255,255,0.4)", lineHeight: 1.6 }}>
              Senior Plastic, Cosmetic & Reconstructive Surgeon<br />
              Sir Ganga Ram Hospital, New Delhi
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{t.footer.quickLinks}</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {Object.entries(t.nav).map(([key, val]) => (
                <a key={key} href={`#${key}`} className="footer-link" style={{
                  textDecoration: "none", color: "rgba(255,255,255,0.5)", fontSize: 13,
                }}>
                  {val}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{t.footer.contactUs}</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13 }}>
              <a href="tel:+919891280450" className="footer-link" style={{
                textDecoration: "none", color: "rgba(255,255,255,0.5)",
              }}>
                📞 +91 98912 80450
              </a>
              <span style={{ color: "rgba(255,255,255,0.5)" }}>
                📍 {lang === "hi" ? "नई दिल्ली - 110060" : "New Delhi - 110060"}
              </span>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 20 }}>{t.footer.followUs}</h4>
            <div style={{ display: "flex", gap: 12 }}>
              {/* Facebook */}
              <a
                href="https://www.facebook.com/drramansharma01"
                target="_blank" rel="noopener noreferrer"
                aria-label="Facebook"
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/drramansharma01"
                target="_blank" rel="noopener noreferrer"
                aria-label="Instagram"
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.6)">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* Google Maps */}
              <a
                href="https://www.google.com/maps/place/Dr.+Raman+Sharma+%7C+Best+Plastic+Surgeon+in+Delhi/@28.6384582,77.1895559,17z/data=!3m1!4b1!4m6!3m5!1s0x390d0377c398c601:0xce680e394e96f83b"
                target="_blank" rel="noopener noreferrer"
                aria-label="Google Maps"
                style={{
                  width: 40, height: 40, borderRadius: 10,
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  textDecoration: "none", transition: "all 0.2s",
                }}
              >
                <svg width="16" height="20" viewBox="0 0 16 20" fill="rgba(255,255,255,0.6)">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 5.25 7.11 11.36 7.41 11.63a.85.85 0 001.18 0C8.89 19.36 16 13.25 16 8c0-4.42-3.58-8-8-8zm0 11a3 3 0 110-6 3 3 0 010 6z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: 1100, margin: "0 auto", paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 12,
        }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{t.footer.rights}</span>
          <div style={{ display: "flex", gap: 2, background: "rgba(255,255,255,0.08)", borderRadius: 20, padding: 2 }}>
            {["en", "hi"].map((l) => (
              <button key={l} onClick={() => setLang(l)} style={{
                padding: "5px 14px", borderRadius: 18, border: "none", cursor: "pointer",
                fontSize: 11, fontWeight: 600, transition: "all 0.2s",
                background: lang === l ? "rgba(255,255,255,0.15)" : "transparent",
                color: lang === l ? "#fff" : "rgba(255,255,255,0.4)",
              }}>
                {l === "en" ? "English" : "हिन्दी"}
              </button>
            ))}
          </div>
        </div>
      </footer>

      {/* ── FLOATING ACTIONS ── */}
      <FloatingActions lang={lang} onBooking={() => setShowBooking(true)} />

      {/* ── APPOINTMENT MODAL ── */}
      {showBooking && <AppointmentModal lang={lang} onClose={() => setShowBooking(false)} />}

      {/* ── BLOG MODAL ── */}
      {blogArticle && <BlogModal article={blogArticle} onClose={() => setBlogArticle(null)} />}
    </div>
  );
}
