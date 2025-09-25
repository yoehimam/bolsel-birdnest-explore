import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Navigation } from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
import { Camera, FileText, Upload, Save, Eye, Trash2, Edit, LogOut } from "lucide-react";

interface Photo {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
}

interface Article {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  date: string;
  status: 'draft' | 'published';
}

export default function Dashboard() {
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated
    const isAdmin = localStorage.getItem("isAdmin");
    if (!isAdmin) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    toast({
      title: "Logout berhasil",
      description: "Anda telah keluar dari dashboard.",
    });
    navigate("/admin");
  };
  
  // Photo management state
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: '1',
      title: 'Burung Kingfisher di Pagi Hari',
      description: 'Foto menakjubkan kingfisher yang sedang berburu di sungai kecil',
      imageUrl: '/api/placeholder/300/200',
      category: 'Wildlife',
      date: '2024-01-15'
    }
  ]);

  const [photoForm, setPhotoForm] = useState({
    title: '',
    description: '',
    category: '',
    imageFile: null as File | null
  });

  // Article management state
  const [articles, setArticles] = useState<Article[]>([
    {
      id: '1',
      title: 'Konservasi Burung Langka di Bolsel',
      content: 'Program konservasi yang dilakukan untuk melindungi habitat burung langka...',
      excerpt: 'Program konservasi untuk melindungi burung langka',
      author: 'Admin',
      date: '2024-01-10',
      status: 'published'
    }
  ]);

  const [articleForm, setArticleForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: '',
    status: 'draft' as 'draft' | 'published'
  });

  // Photo handlers
  const handlePhotoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!photoForm.title || !photoForm.description) {
      toast({
        title: "Error",
        description: "Harap isi semua field yang diperlukan",
        variant: "destructive"
      });
      return;
    }

    const newPhoto: Photo = {
      id: Date.now().toString(),
      title: photoForm.title,
      description: photoForm.description,
      category: photoForm.category,
      imageUrl: photoForm.imageFile ? URL.createObjectURL(photoForm.imageFile) : '/api/placeholder/300/200',
      date: new Date().toISOString().split('T')[0]
    };

    setPhotos([newPhoto, ...photos]);
    setPhotoForm({ title: '', description: '', category: '', imageFile: null });
    
    toast({
      title: "Berhasil!",
      description: "Foto berhasil ditambahkan ke gallery",
    });
  };

  // Article handlers
  const handleArticleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleForm.title || !articleForm.content) {
      toast({
        title: "Error",
        description: "Harap isi semua field yang diperlukan",
        variant: "destructive"
      });
      return;
    }

    const newArticle: Article = {
      id: Date.now().toString(),
      title: articleForm.title,
      content: articleForm.content,
      excerpt: articleForm.excerpt || articleForm.content.substring(0, 150) + '...',
      author: articleForm.author || 'Admin',
      date: new Date().toISOString().split('T')[0],
      status: articleForm.status
    };

    setArticles([newArticle, ...articles]);
    setArticleForm({ title: '', content: '', excerpt: '', author: '', status: 'draft' });
    
    toast({
      title: "Berhasil!",
      description: "Artikel berhasil disimpan",
    });
  };

  const deletePhoto = (id: string) => {
    setPhotos(photos.filter(photo => photo.id !== id));
    toast({
      title: "Dihapus",
      description: "Foto berhasil dihapus dari gallery",
    });
  };

  const deleteArticle = (id: string) => {
    setArticles(articles.filter(article => article.id !== id));
    toast({
      title: "Dihapus",
      description: "Artikel berhasil dihapus",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-display font-bold text-foreground">
              Dashboard Admin
            </h1>
            <p className="text-muted-foreground mt-2">
              Kelola konten foto dan artikel untuk website Birdnest Bolsel
            </p>
          </div>
          <Button 
            variant="outline" 
            onClick={handleLogout}
            className="border-destructive text-destructive hover:bg-destructive hover:text-white"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </Button>
        </div>

        <Tabs defaultValue="photos" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md">
            <TabsTrigger value="photos" className="flex items-center space-x-2">
              <Camera className="w-4 h-4" />
              <span>Kelola Foto</span>
            </TabsTrigger>
            <TabsTrigger value="articles" className="flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Kelola Artikel</span>
            </TabsTrigger>
          </TabsList>

          {/* Photo Management */}
          <TabsContent value="photos" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Photo Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Upload className="w-5 h-5" />
                    <span>Tambah Foto Baru</span>
                  </CardTitle>
                  <CardDescription>
                    Upload foto wildlife untuk ditampilkan di gallery
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handlePhotoSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="photo-title">Judul Foto</Label>
                      <Input
                        id="photo-title"
                        value={photoForm.title}
                        onChange={(e) => setPhotoForm({...photoForm, title: e.target.value})}
                        placeholder="Masukkan judul foto"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="photo-category">Kategori</Label>
                      <Input
                        id="photo-category"
                        value={photoForm.category}
                        onChange={(e) => setPhotoForm({...photoForm, category: e.target.value})}
                        placeholder="e.g. Wildlife, Landscape, Bird Nest"
                      />
                    </div>

                    <div>
                      <Label htmlFor="photo-description">Deskripsi</Label>
                      <Textarea
                        id="photo-description"
                        value={photoForm.description}
                        onChange={(e) => setPhotoForm({...photoForm, description: e.target.value})}
                        placeholder="Deskripsi foto..."
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="photo-file">Upload Foto</Label>
                      <Input
                        id="photo-file"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;
                          setPhotoForm({...photoForm, imageFile: file});
                        }}
                        className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-forest file:text-white hover:file:bg-forest/90"
                      />
                    </div>

                    <Button type="submit" className="w-full nature-gradient text-white">
                      <Save className="w-4 h-4 mr-2" />
                      Simpan Foto
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Photo List */}
              <Card>
                <CardHeader>
                  <CardTitle>Foto Gallery ({photos.length})</CardTitle>
                  <CardDescription>
                    Daftar foto yang sudah diupload
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {photos.map((photo) => (
                      <div key={photo.id} className="flex items-center space-x-4 p-3 border border-border rounded-lg">
                        <img 
                          src={photo.imageUrl} 
                          alt={photo.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-sm truncate">{photo.title}</h4>
                          <p className="text-xs text-muted-foreground">{photo.category}</p>
                          <p className="text-xs text-muted-foreground">{photo.date}</p>
                        </div>
                        <div className="flex space-x-1">
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => deletePhoto(photo.id)}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Article Management */}
          <TabsContent value="articles" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Article Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <FileText className="w-5 h-5" />
                    <span>Tulis Artikel Baru</span>
                  </CardTitle>
                  <CardDescription>
                    Buat artikel berita atau informasi tentang eco-tourism
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleArticleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="article-title">Judul Artikel</Label>
                      <Input
                        id="article-title"
                        value={articleForm.title}
                        onChange={(e) => setArticleForm({...articleForm, title: e.target.value})}
                        placeholder="Masukkan judul artikel"
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="article-author">Penulis</Label>
                      <Input
                        id="article-author"
                        value={articleForm.author}
                        onChange={(e) => setArticleForm({...articleForm, author: e.target.value})}
                        placeholder="Nama penulis"
                      />
                    </div>

                    <div>
                      <Label htmlFor="article-excerpt">Ringkasan</Label>
                      <Textarea
                        id="article-excerpt"
                        value={articleForm.excerpt}
                        onChange={(e) => setArticleForm({...articleForm, excerpt: e.target.value})}
                        placeholder="Ringkasan singkat artikel..."
                        rows={2}
                      />
                    </div>

                    <div>
                      <Label htmlFor="article-content">Konten Artikel</Label>
                      <Textarea
                        id="article-content"
                        value={articleForm.content}
                        onChange={(e) => setArticleForm({...articleForm, content: e.target.value})}
                        placeholder="Tulis konten artikel lengkap di sini..."
                        rows={6}
                        required
                      />
                    </div>

                    <div className="flex space-x-2">
                      <Button 
                        type="button"
                        variant="outline"
                        onClick={() => setArticleForm({...articleForm, status: 'draft'})}
                        className="flex-1"
                      >
                        Simpan Draft
                      </Button>
                      <Button 
                        type="submit"
                        onClick={() => setArticleForm({...articleForm, status: 'published'})}
                        className="flex-1 nature-gradient text-white"
                      >
                        Publikasikan
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>

              {/* Article List */}
              <Card>
                <CardHeader>
                  <CardTitle>Daftar Artikel ({articles.length})</CardTitle>
                  <CardDescription>
                    Artikel yang sudah dibuat
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 max-h-96 overflow-y-auto">
                    {articles.map((article) => (
                      <div key={article.id} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-sm">{article.title}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            article.status === 'published' 
                              ? 'bg-forest/10 text-forest' 
                              : 'bg-muted text-muted-foreground'
                          }`}>
                            {article.status === 'published' ? 'Published' : 'Draft'}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                          {article.excerpt}
                        </p>
                        <div className="flex justify-between items-center">
                          <div className="text-xs text-muted-foreground">
                            <p>By {article.author}</p>
                            <p>{article.date}</p>
                          </div>
                          <div className="flex space-x-1">
                            <Button variant="ghost" size="sm">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button 
                              variant="ghost" 
                              size="sm"
                              onClick={() => deleteArticle(article.id)}
                            >
                              <Trash2 className="w-4 h-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}