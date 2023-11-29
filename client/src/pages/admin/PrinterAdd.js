export default function PrinterAdd(props) {
    // test data 
    const campuses = [
        {
            campus: 1,
            buildings: [
                {
                    building: 'A3',
                    rooms: [ 101, 102, 103 ]
                },
                {
                    building: 'B3',
                    rooms: [ 313, 314, 315 ]
                }
            ]
        },
        { 
            campus: 2,
            buildings: [
                {
                    building: 'H6',
                    rooms: [ 111, 112, 113, 114 ]
                },
                {
                    building: 'H3',
                    rooms: [ 501, 502, 503, 504 ]
                }
            ]
        }
    ]

    return (
        <main>
            <h1>Thêm máy in mới</h1>
            <form method="post">
                <div className="field">
                    <label htmlFor="id">Mã số (ID)</label>
                    <input type="text" name="id" id="id" />
                    <small className="error"></small>
                </div>
                <div className="field">
                    <label htmlFor="brand">Hãng sản xuất</label>
                    <input type="text" name="brand" id="brand" />
                </div>
                <div className="field">
                    <label htmlFor="model">Mẫu mã</label>
                    <input type="text" name="model" id="model" />
                </div>
                <fieldset className="location">
                    <legend>Vị trí</legend>
                    <div className="field">
                        <label htmlFor="campus">Cơ sở</label>
                        <select name="campus" id="campus">
                            <option value="1">CS1 - Cơ sở Lý Thường Kiệt</option>
                            <option value="2">CS2 - Cơ sở Dĩ An</option>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="building">Tòa</label>
                        <select name="building" id="building">
                            <option value="H6">H6</option>
                        </select>
                    </div>
                </fieldset>
                <textarea name="description" id="desc" cols="50" rows="30"></textarea>
                <div className="foot">
                    
                </div>
            </form>
        </main>
    )
}