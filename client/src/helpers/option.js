import { nanoid } from "nanoid";

// get options from data with "name" and "value"
export default function getOptions(data) {
    return data.map((cell) => 
        <option key={`option-${nanoid()}`} value={cell.value}>{cell.name}</option>
    );
}