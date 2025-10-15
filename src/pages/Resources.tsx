import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { trainingData } from "@/data/trainingData";

const Resources = () => {
  const { language } = useLanguage();
  const i18n = trainingData.i18n[language];

  const resources = [
    {
      id: "share-guide",
      title_en: "SHARE Clinical Reference Guide",
      title_fr: "Guide de Référence Clinique SHARE",
      description_en: "Comprehensive 9-chapter guide covering mobile clinic operations, safety protocols, role-specific training, patient care, technology integration, and sustainable health practices in Haiti.",
      description_fr: "Guide complet en 9 chapitres couvrant les opérations de clinique mobile, les protocoles de sécurité, la formation spécifique aux rôles, les soins aux patients, l'intégration technologique et les pratiques de santé durable en Haïti.",
      size_en: "200+ pages",
      size_fr: "200+ pages",
      version: "1.0",
      chapters: [
        "Introduction to SHARE and Mobile Clinic Operations",
        "Ensuring Safety and Compliance in Mobile Clinics",
        "Role-Specific Training in Mobile Clinics",
        "Patient Interaction and Cultural Competency",
        "Technology and Tools in Mobile Clinics",
        "Sustainable Health Practices in Mobile Clinics",
        "Governance and Legal Framework",
        "Training and Capacity Building",
        "Conclusion and Future Directions"
      ],
      downloads: [
        { lang: "en", file: "/documents/share-guide-en.pdf", label: "English Version" },
        { lang: "fr", file: "/documents/share-guide-fr.pdf", label: "Version française" }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2 text-foreground">
          {language === 'en' ? 'Reference Resources' : 'Ressources de référence'}
        </h1>
        <p className="text-muted-foreground text-lg">
          {language === 'en' 
            ? 'Download comprehensive guides and reference materials for offline access'
            : 'Téléchargez des guides complets et des documents de référence pour un accès hors ligne'}
        </p>
      </div>

      <div className="space-y-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">
                      {language === 'en' ? resource.title_en : resource.title_fr}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {language === 'en' ? resource.size_en : resource.size_fr} • Version {resource.version}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-6">
                {language === 'en' ? resource.description_en : resource.description_fr}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold mb-3 text-foreground">
                  {language === 'en' ? 'Table of Contents:' : 'Table des matières :'}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {resource.chapters.map((chapter, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <FileText className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                      <span>Chapter {idx + 1}: {chapter}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t">
                {resource.downloads.map((download) => (
                  <Button
                    key={download.lang}
                    asChild
                    variant="default"
                    className="gap-2"
                  >
                    <a href={download.file} download target="_blank" rel="noopener noreferrer">
                      <Download className="h-4 w-4" />
                      {download.label}
                    </a>
                  </Button>
                ))}
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                {language === 'en' 
                  ? 'You can also access this content interactively through the "SHARE Clinical Reference Guide" course in My Courses.'
                  : 'Vous pouvez également accéder à ce contenu de manière interactive via le cours "Guide de Référence Clinique SHARE" dans Mes Cours.'}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Resources;
