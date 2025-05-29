import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./movieForm.css";
import MovieModel from "../../../../models/MovieModel";

type MovieFormProps = {
    movie: MovieModel | null;
    onSubmitDone: () => void;
    onCancel: () => void;
};

function MovieForm({ movie, onSubmitDone, onCancel }: MovieFormProps) {
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [duration, setDuration] = useState("0");
    const [country, setCountry] = useState("");
    const [director, setDirector] = useState("");
    const [rate, setRate] = useState("");
    const [description, setDescription] = useState("");
    const [trailer, setTrailer] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [banner, setBanner] = useState<File | null>(null);
    const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
    const [bannerPreview, setBannerPreview] = useState<string | null>(null);
    const token = localStorage.getItem("token");


    const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const file = e.target.files[0];
            setThumbnail(file);
            setThumbnailPreview(URL.createObjectURL(file));
        }
    };

    const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            const file = e.target.files[0];
            setBanner(file);
            setBannerPreview(URL.createObjectURL(file)); // 👈 Tạo URL tạm thời
        }
    };

    useEffect(() => {
        if (movie) {
            setTitle(movie.title);
            setReleaseDate(movie.releaseDate);
            setDuration(movie.duration.toString());
            setCountry(movie.country);
            setDirector(movie.director);
            setRate(movie.rate.toString());
            setDescription(movie.movieDescription);
            setTrailer(movie.trailerUrl);
            setThumbnailPreview(`http://localhost:8080/${movie.thumbnailUrl}`);
            setBannerPreview(`http://localhost:8080/${movie.bannerUrl}`);
            setThumbnail(null);
            setBanner(null);
        } else {
            // Nếu là thêm mới
            setTitle("");
            setReleaseDate("");
            setDuration("0");
            setCountry("");
            setDirector("");
            setRate("");
            setDescription("");
            setTrailer("");
            setThumbnail(null);
            setBanner(null);
            setThumbnailPreview(null);
            setBannerPreview(null);
        }
    }, [movie]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        const jsonData = {
            title,
            releaseDate,
            duration: parseInt(duration),
            rate: parseFloat(rate),
            country,
            director,
            movieDescription: description,
            trailerUrl: trailer,
        };

        formData.append("data", new Blob([JSON.stringify(jsonData)], { type: "application/json" }));
        if (thumbnail) formData.append("thumbnail", thumbnail);
        if (banner) formData.append("banner", banner);

        const url = movie ? `http://localhost:8080/movies/${movie.movieId}` : "http://localhost:8080/movies";
        const method = movie ? "PUT" : "POST";

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                body: formData,
            });

            if (response.ok) {
                alert(movie ? "Cập nhật thành công!" : "Thêm mới thành công!");
                onSubmitDone();
            } else {
                alert("Lỗi khi gửi dữ liệu.");
            }
        } catch (error) {
            console.error("Lỗi khi gửi:", error);
            alert("Lỗi kết nối server.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex movie-from">
            <div>
                <div className="imgs" style={{ width: "100%", margin: "0 auto" }}>
                    <img
                        src={thumbnailPreview || "images/movies/thumbnail-dia-dao.jpg"}
                        alt="thumbnail"
                        style={{ height: "250px", objectFit: "cover" }}
                    />
                    <img
                        src={bannerPreview || "images/banners/banner-dia-dao.jpg"}
                        alt="banner"
                        style={{ height: "250px", objectFit: "cover" }}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Thumbnail</label>
                    <input type="file" accept="image/*" className="form-control" onChange={handleThumbnailChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Banner</label>
                    <input type="file" accept="image/*" className="form-control" onChange={handleBannerChange} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Trailer url</label>
                    <input type="text" className="form-control" placeholder="Trailer url" value={trailer} onChange={(e) => setTrailer(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Đánh giá</label>
                    <input type="text" className="form-control" placeholder="Đánh giá" value={rate} onChange={(e) => setRate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Thời lượng</label>
                    <input type="text" className="form-control" placeholder="Thời lượng" value={duration} onChange={(e) => setDuration(e.target.value)} />
                </div>
            </div>
            <div>
                <div className="mb-3">
                    <label className="form-label">Tên phim</label>
                    <input type="text" className="form-control" placeholder="Tên phim" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Ngày chiếu</label>
                    <input type="date" className="form-control" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Quốc gia</label>
                    <input type="text" className="form-control" placeholder="Quốc gia" value={country} onChange={(e) => setCountry(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Đạo diễn</label>
                    <input type="text" className="form-control" placeholder="Đạo diễn" value={director} onChange={(e) => setDirector(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">Mô tả</label>
                    <textarea className="form-control" rows={8} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <button className="btn btn-success mb-3" style={{ width: "100%", marginTop: "auto", height: "40px"}} type="submit">Xác nhận</button>
                <button className="btn btn-secondary" style={{ width: "100%", marginTop: "auto", height: "40px"}} type="button" onClick={onCancel}>Hủy</button>
            </div>
        </form>
    );
}

export default MovieForm;
