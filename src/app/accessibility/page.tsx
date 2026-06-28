import type { Metadata } from "next";
import LegalLayout, { LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "הצהרת נגישות | PassportCard Pay",
  description: "הצהרת הנגישות של האתר בהתאם לתקן הישראלי ת״י 5568.",
};

export default function AccessibilityPage() {
  return (
    <LegalLayout title="הצהרת נגישות" updated="01/07/2026">
      <LegalSection title="מחויבותנו לנגישות">
        עודד גל סוכנות לביטוח פנסיוני (2016) בע״מ רואה חשיבות רבה במתן שירות
        שוויוני לכלל הגולשים, לרבות אנשים עם מוגבלות, ופועלת להנגיש את האתר בהתאם
        לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ״ח–1998, ולתקנות שוויון זכויות
        לאנשים עם מוגבלות (התאמות נגישות לשירות), התשע״ג–2013.
      </LegalSection>

      <LegalSection title="רמת הנגישות">
        האתר הונגש בהתאם לתקן הישראלי ת״י 5568 לנגישות תכנים באינטרנט, ברמה AA,
        המבוסס על הנחיות WCAG 2.0.
      </LegalSection>

      <LegalSection title="אמצעי הנגישות באתר">
        באתר מוטמע תפריט נגישות, הנפתח בלחיצה על סמל הנגישות בפינת המסך, המאפשר בין
        היתר: הגדלה והקטנה של הגופן, ניגודיות גבוהה, הדגשת קישורים, גופן קריא,
        עצירת אנימציות וניווט באמצעות מקלדת.
      </LegalSection>

      <LegalSection title="מגבלות ידועות">
        אנו ממשיכים לשפר את נגישות האתר באופן שוטף. ייתכן שחלקים מסוימים טרם הונגשו
        במלואם. אם נתקלת בקושי בנגישות, נשמח שתעדכן אותנו ונפעל לתקן בהקדם.
      </LegalSection>

      <LegalSection title="פניות בנושא נגישות">
        רכז הנגישות: עודד גל. דוא״ל: oded@odedgal.co.il. טלפון: 052-4029911. נשתדל
        להשיב לכל פנייה בהקדם האפשרי.
      </LegalSection>
    </LegalLayout>
  );
}
