function anaadirEjercicio(){
            document.getElementById("form-new-training").appendChild(
                <tr><td><select><option value="Jalón al pecho">Jalón al pecho</option></select></td><td>
                        <input class="form-control" type="text" name="weight" maxlength="3" id="Ppdb">
                    </td>
                    <td>
                        <label>Kg.</label>
                    </td>
                    <td>    
                        <input type="text" maxlength="3" name="reps" id="Rpdb">
                    </td>
                    <td>
                        <label>Rep.</label>
                    </td>
                </tr>
        )
        }