import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: false,
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css',
})
export class ReviewsComponent {
  reviews = [
    {
      reviewer: 'SARKIS D.',
      review:
        'Definitely 5 stars. This Doctor actually listens to your concerns, and cares. I feel very comfortable talking to him, and I come out of every appointment feeling great, and positive.',
      reviewDate: 'Apr 25, 2025',
    },
    {
      reviewer: 'CHARLES WENDELL P.',
      review: `Great first appointment. Back in 30 days for a follow up. Thorough interview for new patients. It's been a while since I was able to spend more than a few minutes with a physician.`,
      reviewDate: 'Apr 15, 2025',
    },
    {
      reviewer: 'DEANNA ROSE B.',
      review: `So happy I finally found a Doctor that I trust. He is very patient and takes the time to listen. Thank you!!`,
      reviewDate: 'Mar 28, 2025',
    },
    {
      reviewer: 'Mark F.',
      review: `Dr. Ansari is an excellent doctor!! The fact he is both an MD and a Functional Medicine doctor is rare. He is patient and a great listener. You can tell he really cares about his patients.`,
      reviewDate: 'Feb 03, 2025',
    },
    {
      reviewer: 'KELLIE LYNN A.',
      review: `Dr.Ansari is extremely knowledgeable! He is an absolute blessing, and I’m so thankful I have the ability to work with him. I can’t wait to heal.`,
      reviewDate: 'Jan 02, 2025',
    },
    {
      reviewer: 'Walid T.',
      review: `Very professional & intelligent, I recommend to everyone.`,
      reviewDate: 'Sep 08, 2024',
    },
    {
      reviewer: 'PATTY M.',
      review: `Dr Ansari is attentive, knowledgable and compassionate - a great combo for a doc and appreciated by his patients. I highly recommend him.`,
      reviewDate: 'Aug 26, 2024',
    },
    {
      reviewer: 'Pedro G.',
      review: `I have been under the care of Dr. Ansari for a few months, and I am thoroughly impressed with his expertise and approach. Dr. Ansari exhibits a high level of knowledge and responsiveness, addressing my concerns with both efficiency and thoroughness. He listens attentively and is flexible in his treatment methods, offering both herbal and traditional medicine options. This personalized approach, combined with his willingness to work with me to determine the best course of action, has been incredibly reassuring. I am confident in Dr. Ansari's ability to guide me towards better health. I highly recommend Dr. Ansari for his professionalism and compassionate care.`,
      reviewDate: 'Aug 02, 2024',
    },
    {
      reviewer: 'AMY M.',
      review: `Dr Ansari is very friendly and understanding. I was completely comfortable with his care. I am so glad I found him!`,
      reviewDate: 'May 24, 2024',
    },
    {
      reviewer: 'Patty M.',
      review: `I have been meeting with Dr Ansari to deal with mold toxicity. He is knowledgable and helpful in explaining conditions and designing a specific treatment plan. He is a good listener and compassionate - two qualities you always hope to have in a doctor. It’s unusual to find an MD who also is trained in integrative medicine and has specialized training in mold toxicity.`,
      reviewDate: 'Apr 09, 2024',
    },
  ];
}
