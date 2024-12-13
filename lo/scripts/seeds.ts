import "dotenv/config";
import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);

const db = drizzle(sql, { schema });

const main = async () => {
  try {
    console.log("Seeding database");

    // Delete existing records to reset the database
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);
    await db.delete(schema.units);
    await db.delete(schema.lessons);
    await db.delete(schema.challenges);
    await db.delete(schema.challengeOptions);
    await db.delete(schema.challengeProgress);
    await db.delete(schema.userSubscription);

    // Insert sample courses
    await db.insert(schema.courses).values([
      { id: 1, title: "Spanish", imageSrc: "/es.svg" },
      { id: 2, title: "Italian", imageSrc: "/it.svg" },
      { id: 3, title: "French", imageSrc: "/fr.svg" },
      { id: 4, title: "Croatian", imageSrc: "/hr.svg" },
    ]);

    // Insert sample units
    await db.insert(schema.units).values([
      { id: 1, courseId: 1, title: "Unit 1", description: "Learn the basics of Spanish", order: 1 },
    ]);

    // Insert sample lessons
    await db.insert(schema.lessons).values([
      { id: 1, unitId: 1, title: "Nouns", order: 1 },
      { id: 2, unitId: 1, title: "Verbs", order: 2 },
    ]);

    // Insert sample challenges
    await db.insert(schema.challenges).values([
      { id: 1, lessonId: 1, type: "SELECT", order: 1, question: 'Which one of these is "the man"?' },
      { id: 2, lessonId: 1, type: "ASSIST", order: 2, question: '"the man"' },
    ]);

    // Insert challenge options for challenge 1
    await db.insert(schema.challengeOptions).values([
      { challengeId: 1, imageSrc: "/man.svg", correct: true, text: "el hombre", audioSrc: "/es_man.mp3" },
      { challengeId: 1, imageSrc: "/woman.svg", correct: false, text: "la mujer", audioSrc: "/es_woman.mp3" },
    ]);

    // Insert challenge options for challenge 2
    await db.insert(schema.challengeOptions).values([
      { challengeId: 2, correct: true, text: "el hombre", audioSrc: "/es_man.mp3" },
      { challengeId: 2, correct: false, text: "la mujer", audioSrc: "/es_woman.mp3" },
    ]);

    console.log("Seeding finished");
  } catch (error) {
    console.error("Error while seeding", error);
    throw new Error("Failed to seed the database");
  }
};

main();
