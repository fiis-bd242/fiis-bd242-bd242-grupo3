package pe.uni.buenaventurabackend.modules.gestion_insumos.dto;

public class Detalle_reserva_temporalDTO {
    private String nombreInsumo;
    private int cantidadReservada;

    public Detalle_reserva_temporalDTO(String nombreInsumo, int cantidadReservada) {
        this.nombreInsumo = nombreInsumo;
        this.cantidadReservada = cantidadReservada;
    }

    public String getNombreInsumo() {
        return nombreInsumo;
    }

    public void setNombreInsumo(String nombreInsumo) {
        this.nombreInsumo = nombreInsumo;
    }

    public int getCantidadReservada() {
        return cantidadReservada;
    }

    public void setCantidadReservada(int cantidadReservada) {
        this.cantidadReservada = cantidadReservada;
    }
}
