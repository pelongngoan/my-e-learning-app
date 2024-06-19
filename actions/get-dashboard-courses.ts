import { db } from "@/lib/db";
import { Category, Course } from "@prisma/client";
import { getProgress } from "./get-progress";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

type GetDashboardCourses = {
  completedCourse: CourseWithProgressWithCategory[];
  coursesInProgress: CourseWithProgressWithCategory[];
};
export const getDashboardCourses = async (
  userId: string
): Promise<GetDashboardCourses> => {
  try {
    const purchasedCourses = await db.purchase.findMany({
      where: {
        userId: userId,
      },
      select: {
        course: {
          include: {
            category: true,
            chapters: {
              where: {
                isPublished: true,
              },
            },
          },
        },
      },
    });
    const courses = purchasedCourses.map((purchase) => purchase.course) as unknown as CourseWithProgressWithCategory[];
    for()
  } catch (error) {
    console.log("[GET_DASHBOARD_COURSES]", error);
    return {
      completedCourse: [],
      coursesInProgress: [],
    };
  }
};
