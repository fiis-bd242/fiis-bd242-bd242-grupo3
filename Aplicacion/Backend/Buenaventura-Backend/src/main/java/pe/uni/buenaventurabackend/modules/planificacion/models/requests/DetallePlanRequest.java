package pe.uni.buenaventurabackend.modules.planificacion.models.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import pe.uni.buenaventurabackend.modules.planificacion.models.EquipoDTO;
import pe.uni.buenaventurabackend.modules.planificacion.models.InsumoDTO;
import pe.uni.buenaventurabackend.modules.planificacion.models.InsumoDTON;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class DetallePlanRequest {
    private String id_plan;
    private String nombre_tipo_mant;
    private String id_maquina;
    private String creador;
    private String estado;
    private String fecha_plan;
    private String fecha_inicio_programado;
    private String fecha_fin_programado;
    private String responsable;
    private String criticidad;
    private String id_orden;
    private String descripcion;
    private List<EquipoDTO> listaEquipos;
    private List<InsumoDTO> listaInsumos;
}
