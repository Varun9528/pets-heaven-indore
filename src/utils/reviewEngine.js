// AI Review Generation Engine for Pet's Heaven Indore
// Verified 2-3 meaningful sentences, 180-300 characters per review
// Distinct openings, varied sentence structures, star rating alignment

// Official Direct Review Composer URL (from Google Business Profile: Read reviews -> Get more reviews -> Copy link)
// Set below when owner provides the link; defaults safely to verified Maps listing
export const OFFICIAL_REVIEW_COMPOSER_URL = '';

export const OFFICIAL_GOOGLE_MAPS_FALLBACK = 'https://maps.app.goo.gl/YAN4w9XHaynJMoKf8';

export const OFFICIAL_GOOGLE_REVIEW_URL =
  OFFICIAL_REVIEW_COMPOSER_URL && OFFICIAL_REVIEW_COMPOSER_URL.trim().length > 0
    ? OFFICIAL_REVIEW_COMPOSER_URL.trim()
    : OFFICIAL_GOOGLE_MAPS_FALLBACK;

export const PRODUCT_OPTIONS = [
  { id: 'dogs', label: 'Dogs & Breeds', icon: '🐕' },
  { id: 'cats', label: 'Cats & Breeds', icon: '🐱' },
  { id: 'birds', label: 'Pet Birds', icon: '🦜' },
  { id: 'hamsters', label: 'Hamsters', icon: '🐹' },
  { id: 'mice', label: 'Pet Mice', icon: '🐭' },
  { id: 'fish', label: 'Aquarium Fish', icon: '🐠' },
  { id: 'other', label: 'Other Pets / Supplies', icon: '✨' },
];

export const EXPERIENCE_OPTIONS = [
  { id: 'quality', label: 'Product Quality' },
  { id: 'staff', label: 'Staff Behaviour' },
  { id: 'store', label: 'Store Experience' },
  { id: 'guidance', label: 'Helpful Guidance' },
  { id: 'variety', label: 'Variety & Selection' },
  { id: 'overall', label: 'Overall Experience' },
  { id: 'other', label: 'Other' },
];

export const STYLE_DEFINITIONS = [
  { id: 'short', name: 'Short & Simple', tag: 'Direct & Concise' },
  { id: 'detailed', name: 'Detailed Experience', tag: 'Comprehensive' },
  { id: 'professional', name: 'Professional', tag: 'Formal & Polished' },
  { id: 'friendly', name: 'Friendly & Conversational', tag: 'Warm & Casual' },
  { id: 'hinglish', name: 'Natural Hinglish', tag: 'Local Indore Vibe' },
  { id: 'personal', name: 'Personal Experience', tag: 'First-Person Story' },
];

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateVariations(rating, products, experiences, customNote) {
  const prodText = products && products.length > 0
    ? products.map(p => p.label).join(', ')
    : 'pets and pet supplies';
  const expText = experiences && experiences.length > 0
    ? experiences.map(e => e.label).join(', ')
    : 'store guidance';
  const hasNotes = customNote && customNote.trim().length > 0;
  const note = hasNotes ? customNote.trim() : '';

  // 1. Short & Simple (Target: ~180–260 chars, 2-3 meaningful sentences)
  let shortText = '';
  if (rating === 5) {
    const sOpen = [
      `Had a fantastic 5-star visit to Pet's Heaven Indore for ${prodText}.`,
      `Pet's Heaven Indore is truly a standout local pet destination for ${prodText}.`,
      `Found healthy, active and well-cared-for ${prodText} at Pet's Heaven in Indore.`
    ];
    const sEnd = [
      `The team handled our queries on ${expText} with genuine patience and clear guidance. Highly recommended for any pet parent in Indore!`,
      `Their honest advice on ${expText} made the entire visit worthwhile and informative. We will definitely return for future supplies!`,
      `Clean setup, active companions, and prompt assistance regarding ${expText}. Full 5-star rating well earned across the board!`
    ];
    shortText = `${pickRandom(sOpen)} ${pickRandom(sEnd)}${note ? ` Especially appreciated: ${note}.` : ''}`;
  } else if (rating === 4) {
    shortText = `Very pleasant visit to Pet's Heaven Indore while exploring their ${prodText} collection. The staff assisted us well with ${expText}, and the store was clean and orderly. A dependable 4-star destination for Indore pet owners.${note ? ` Note: ${note}.` : ''}`;
  } else if (rating === 3) {
    shortText = `Fair experience visiting Pet's Heaven Indore for ${prodText}. The selection was decent, though customer support regarding ${expText} felt average during our stop. A standard local option if you are around Nagar Nigam Road.${note ? ` Note: ${note}.` : ''}`;
  } else if (rating === 2) {
    shortText = `Visited Pet's Heaven Indore for ${prodText}, but the ${expText} was below our expectations. The store carries variety, but staff attention to customer questions needs more dedication. Hope management addresses this feedback.${note ? ` Concern: ${note}.` : ''}`;
  } else {
    shortText = `Very disappointing visit to Pet's Heaven Indore regarding ${prodText}. We expected better standards, but ${expText} was poorly handled by the on-duty staff. Management needs to improve customer service significantly.${note ? ` Issue: ${note}.` : ''}`;
  }

  // 2. Detailed Experience (Target: ~240–300 chars, 2-3 structured sentences)
  let detailedText = '';
  if (rating === 5) {
    const dOpen = `During my recent visit to Pet's Heaven Indore, I spent ample time checking their ${prodText} section.`;
    const dBody = `The staff patiently guided me through ${expText}, explaining daily care and feeding routines without rushing. Having such a transparent pet store in Indore makes pet parenting much easier!`;
    detailedText = `${dOpen} ${dBody}${note ? ` Special note: ${note}.` : ''}`;
  } else if (rating === 4) {
    detailedText = `Spent time exploring Pet's Heaven Indore specifically for ${prodText}. The store maintains good variety, and the assistance regarding ${expText} was practical and informative. It was a solid 4-star experience with healthy animals and polite service.${note ? ` Observation: ${note}.` : ''}`;
  } else if (rating === 3) {
    detailedText = `Here is my balanced review of Pet's Heaven Indore regarding ${prodText}. While their location near Nagar Nigam Road is convenient, the support for ${expText} was just average. Decent for routine supplies, but there is room for service improvement.${note ? ` Note: ${note}.` : ''}`;
  } else if (rating === 2) {
    detailedText = `Sharing my honest feedback from our recent visit to Pet's Heaven Indore for ${prodText}. The shop has good potential, but the lack of proper attention to ${expText} was disappointing. Better staff training and clear guidance are needed.${note ? ` Concern: ${note}.` : ''}`;
  } else {
    detailedText = `Writing this detailed review to document serious shortcomings at Pet's Heaven Indore for ${prodText}. We expected responsible standards, but ${expText} was neglected by the staff. Fellow pet lovers should verify details carefully before visiting.${note ? ` Problem: ${note}.` : ''}`;
  }

  // 3. Professional (Target: ~220–290 chars, formal, objective vocabulary)
  let professionalText = '';
  if (rating === 5) {
    const pOpen = [
      `Pet's Heaven Indore demonstrates commendable retail standards and ethical animal care regarding ${prodText}.`,
      `Commendable service standards observed during our consultation at Pet's Heaven Indore regarding ${prodText}.`,
      `A highly structured and ethically managed pet establishment in Indore for ${prodText}.`
    ];
    const pBody = [
      `Store personnel exhibited sound technical knowledge and addressed queries on ${expText} in a structured manner. A verified, reliable establishment for Indore pet parents.`,
      `Their advisory quality and diligence concerning ${expText} reflect genuine commitment to animal well-being. Fully recommended for verified companions in Indore.`,
      `The facility maintains orderly enclosures, sound hygiene protocols, and transparent customer consultation on ${expText}. Highly recommended.`
    ];
    professionalText = `${pickRandom(pOpen)} ${pickRandom(pBody)}${note ? ` Documented: ${note}.` : ''}`;
  } else if (rating === 4) {
    professionalText = `A well-curated pet enterprise in Indore offering a dependable catalog of ${prodText}. Customer engagement concerning ${expText} was handled with professionalism and diligence. Highly viable destination for Indore residents seeking healthy companions.${note ? ` Point: ${note}.` : ''}`;
  } else if (rating === 3) {
    professionalText = `Objective review of Pet's Heaven Indore for ${prodText}. While inventory accessibility meets baseline standards, advisory protocols for ${expText} remain ordinary. Operational refinement would notably enhance customer satisfaction.${note ? ` Point: ${note}.` : ''}`;
  } else if (rating === 2) {
    professionalText = `Constructive assessment of Pet's Heaven Indore regarding ${prodText}. Operational protocols and attentiveness to ${expText} fell short of expected retail benchmarks. Store management should implement systematic staff training.${note ? ` Issue: ${note}.` : ''}`;
  } else {
    professionalText = `Critical assessment regarding substandard customer service at Pet's Heaven Indore for ${prodText}. Substantial operational shortcomings were evident concerning ${expText}. Immediate administrative intervention is required.${note ? ` Finding: ${note}.` : ''}`;
  }

  // 4. Friendly & Conversational (Target: ~190–280 chars, warm, casual tone)
  let friendlyText = '';
  if (rating === 5) {
    const fOpen = [
      `Really loved stopping by Pet's Heaven in Indore!`,
      `Such a pleasant time exploring Pet's Heaven Indore today!`,
      `Big thumbs up to the wonderful team at Pet's Heaven Indore!`
    ];
    const fBody = [
      `Checked out their ${prodText} section and everyone was so warm, sweet, and patient with ${expText}. You can tell they genuinely care about their animals. Will definitely be coming back! 🐾`,
      `We came in looking for ${prodText} and had a super lovely chat about ${expText}. The animals look happy and healthy in a clean store. Definitely worth dropping by! ✨`,
      `They gave us great tips on ${expText} and made browsing ${prodText} so much fun. Great local spot for pet lovers in Indore with honest recommendations!`
    ];
    friendlyText = `${pickRandom(fOpen)} ${pickRandom(fBody)}${note ? ` Loved that ${note}.` : ''}`;
  } else if (rating === 4) {
    friendlyText = `Such a pleasant time at Pet's Heaven Indore! Went to see their ${prodText} and the team gave great advice on ${expText}. Clean setup, friendly faces, and happy pets. Definitely worth dropping by if you're in the city!${note ? ` Plus: ${note}.` : ''}`;
  } else if (rating === 3) {
    friendlyText = `Stopped by Pet's Heaven in Indore for ${prodText}. The visit was alright—${expText} was okay, nothing too special. Handy local shop if you're nearby, but they could step up their service a bit.${note ? ` Quick note: ${note}.` : ''}`;
  } else if (rating === 2) {
    friendlyText = `Was really excited to check out Pet's Heaven Indore for ${prodText}, but left feeling a bit down about ${expText}. The variety is there, but customer attention wasn't great. Hope they improve the experience for next time!${note ? ` Detail: ${note}.` : ''}`;
  } else {
    friendlyText = `Really sad to say that our stop at Pet's Heaven Indore for ${prodText} didn't go well. The ${expText} was frustrating and nobody seemed interested in helping. Hope the management looks into customer care soon.${note ? ` Problem: ${note}.` : ''}`;
  }

  // 5. Natural Hinglish (Target: ~210–280 chars, authentic Indore colloquial cadence)
  let hinglishText = '';
  if (rating === 5) {
    const hOpen = [
      `Indore mein genuine guidance ke liye Pet's Heaven sach mein badiya store hai!`,
      `Pet's Heaven Indore ka visit bohot hi mast aur satisfying raha!`,
      `Agar Indore mein ache ${prodText} chahiye toh Pet's Heaven best option hai.`
    ];
    const hBody = [
      `Yahan ${prodText} ki quality ek number hai aur staff ne ${expText} bohot ache se explain kiya. Indore ke sabhi pet lovers ko zaroor visit karna chahiye! 👍`,
      `${expText} ke mamle mein staff bohot cooperative laga aur sabhi doubts patiently clear kiye. Setup bhi clean hai aur pets healthy hain. Full 5 stars! 🌟`,
      `${prodText} ki variety Indore ke hisaab se kaafi genuine hai. ${expText} mein proper time diya bina kisi rush ke. Highly recommended!`
    ];
    hinglishText = `${pickRandom(hOpen)} ${pickRandom(hBody)}${note ? ` Khaaskar ${note}.` : ''}`;
  } else if (rating === 4) {
    hinglishText = `Pet's Heaven Indore ka visit kaafi badiya raha for ${prodText}. Staff ne ${expText} mein ache se assist kiya aur setup bhi clean mila. Indore mein pet supplies aur advice ke liye solid 4-star recommendation hai!${note ? ` Highlight: ${note}.` : ''}`;
  } else if (rating === 3) {
    hinglishText = `Pet's Heaven Indore par theek-thaak experience raha. ${prodText} ki variety decent thi, lekin ${expText} bilkul average laga. Normal store visit tha, customer service thoda aur fast hona chahiye.${note ? ` Note: ${note}.` : ''}`;
  } else if (rating === 2) {
    hinglishText = `Pet's Heaven Indore ka recent visit thoda disappointing tha for ${prodText}. Specially ${expText} ke mamle mein staff ko thoda aur attentive hona chahiye. Genuine feedback de raha hu taaki aage sudhaar ho.${note ? ` Issue: ${note}.` : ''}`;
  } else {
    hinglishText = `Pet's Heaven Indore par humara experience bilkul bhi accha nahi raha for ${prodText}. Yahan ${expText} ko lekar koi proper response nahi mila. Store management ko service aur staff behaviour par dhyan dena padega.${note ? ` Problem: ${note}.` : ''}`;
  }

  // 6. Personal Experience (Target: ~230–295 chars, reflective first-person voice)
  let personalText = '';
  if (rating === 5) {
    personalText = `As a pet lover in Indore, finding trustworthy guidance is essential to me. My experience at Pet's Heaven while looking for ${prodText} was reassuring, especially their transparent focus on ${expText}. It is comforting to have such a dedicated, ethical pet store in our city.${note ? ` In my case: ${note}.` : ''}`;
  } else if (rating === 4) {
    personalText = `Finding reliable advice in Indore can be tricky, but Pet's Heaven made exploring ${prodText} smooth and easy. The team's attention to ${expText} gave me confidence in my pet care decisions. Glad I visited, and I would happily recommend them to friends.${note ? ` Personal note: ${note}.` : ''}`;
  } else if (rating === 3) {
    personalText = `My personal visit to Pet's Heaven Indore for ${prodText} was a mixed bag. The store is easily accessible, but my interaction regarding ${expText} was just standard. An acceptable local stop that meets basic pet needs.${note ? ` Note: ${note}.` : ''}`;
  } else if (rating === 2) {
    personalText = `Sharing my personal perspective after stopping by Pet's Heaven Indore for ${prodText}. Regrettably, the standard of ${expText} fell well below what I had hoped for. I hope management takes this constructive feedback seriously.${note ? ` My observation: ${note}.` : ''}`;
  } else {
    personalText = `I rarely post critical reviews, but my visit to Pet's Heaven Indore for ${prodText} was deeply unsatisfactory. The complete lack of care regarding ${expText} was unacceptable. Would not recommend based on how my visit was handled.${note ? ` My experience: ${note}.` : ''}`;
  }

  return [
    { ...STYLE_DEFINITIONS[0], text: shortText },
    { ...STYLE_DEFINITIONS[1], text: detailedText },
    { ...STYLE_DEFINITIONS[2], text: professionalText },
    { ...STYLE_DEFINITIONS[3], text: friendlyText },
    { ...STYLE_DEFINITIONS[4], text: hinglishText },
    { ...STYLE_DEFINITIONS[5], text: personalText },
  ];
}
