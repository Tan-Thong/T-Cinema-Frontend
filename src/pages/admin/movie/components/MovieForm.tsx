import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "./movieForm.css";



function Form() {
    const [title, setTitle] = useState("");
    const [releaseDate, setReleaseDate] = useState("");
    const [duration, setDuration] = useState("0");
    const [country, setCountry] = useState("");
    const [director, setDirector] = useState("");
    const [classification, setClassification] = useState("");
    const [rate, setRate] = useState("");
    const [description, setDescription] = useState("");
    const [trailer, setTrailer] = useState("");
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [banner, setBanner] = useState<File | null>(null);

    

    const handleThumbnailChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) setThumbnail(e.target.files[0]);
    };

    const handleBannerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) setBanner(e.target.files[0]);
    };

    return (
        
            <form method="post" className="d-flex">
                <div>
                    <div className="imgs" style={{ width: "100%", margin: "0 auto" }}>
                        <img src="images/movies/thumbnail-dia-dao.jpg" alt="" style={{ height: "250px" }} />
                        <img src="images/banners/banner-dia-dao.jpg" alt="" style={{ height: "250px" }} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Thumbnail</label>
                        <input type="file" className="form-control" onChange={handleThumbnailChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Banner</label>
                        <input type="file" className="form-control" onChange={handleBannerChange} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Trailer url</label>
                        <input type="text" className="form-control" placeholder="Trailer url" value={trailer} onChange={(e) => setTrailer(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Độ tuổi</label>
                        <input type="text" className="form-control" placeholder="Độ tuổi" value={classification} onChange={(e) => setClassification(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Đánh giá</label>
                        <input type="text" className="form-control" placeholder="Đánh giá" value={rate} onChange={(e) => setRate(e.target.value)} />
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <label className="form-label">Tên phim</label>
                        <input type="text" className="form-control" placeholder="Tên phim" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Ngày chiếu</label>
                        <input type="date" className="form-control" placeholder="Ngày chiếu" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Thời lượng</label>
                        <input type="text" className="form-control" placeholder="Thời lượng" value={duration} onChange={(e) => setDuration(e.target.value)} />
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
                        <textarea className="form-control" rows={6} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <button className="btn btn-success" style={{ width: "100%", marginTop: "auto" }} type="submit">Xác nhận</button>
                </div>
            </form>

    )
}

export default Form;